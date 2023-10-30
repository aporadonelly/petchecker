import { useForm } from 'react-hook-form-mui';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FormContainer,
  TextFieldElement,
  PasswordElement,
  CheckboxElement,
} from 'react-hook-form-mui';
import { Link as RouterLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { isFetchBaseFieldError } from '@/schemas/api';
import { Register, RegisterSchema } from '@/schemas/auth';
import { useRegisterMutation, useResendEmailVerificationMutation } from '@/redux/auth/api';

export function Component() {
  const formContext = useForm<Register>({
    defaultValues: {
      subscribed_to_mailing_list: false,
    },
    resolver: zodResolver(RegisterSchema),
  });
  const { setError, formState } = formContext;

  const [register, registerResult] = useRegisterMutation();
  const [resendEmailVerification, resendEmailVerificationResult] =
    useResendEmailVerificationMutation();

  const handleSubmit = async (values: Register) => {
    try {
      await register(values).unwrap();
    } catch (error) {
      if (isFetchBaseFieldError<Register>(error)) {
        const errors = error.data.errors;
        Object.keys(errors).forEach((key) => {
          setError(key, { message: errors[key][0] });
        });
      }
    }
  };

  const renderForm = () => (
    <FormContainer formContext={formContext} onSuccess={handleSubmit}>
      <Stack spacing={2}>
        <TextFieldElement name="first_name" label="First Name" placeholder="First Name" required />
        <TextFieldElement name="last_name" label="Last Name" placeholder="Last Name" required />
        <TextFieldElement
          type="email"
          name="email"
          label="Email Address"
          placeholder="Email Address"
          required
        />
        <PasswordElement name="password" label="Password" placeholder="Password" required />
        <PasswordElement
          name="confirm_password"
          label="Confirm Password"
          placeholder="Confirm Password"
          required
        />
        <CheckboxElement
          name="subscribed_to_mailing_list"
          label="Yes, send me emails, and updates."
        />
        <Button type="submit" disabled={registerResult.isLoading}>
          Register
        </Button>
      </Stack>
    </FormContainer>
  );

  if (registerResult.isSuccess) {
    return (
      <Stack spacing={2}>
        <Typography variant="h6" fontWeight="bold">
          Verify Email
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Before continuing, could you verify your email address by click on the link we just
          emailed to you? If you didn't receive the email, we will glady send you another.
        </Typography>
        {resendEmailVerificationResult.isSuccess && (
          <Alert severity="success">
            A new verification link has been sent to the email address you provided in your profile
            settings.
          </Alert>
        )}
        {resendEmailVerificationResult.isError && (
          <Alert severity="error">Account already verified.</Alert>
        )}
        <Button
          onClick={() =>
            resendEmailVerification({
              email: registerResult.data.data.email,
            })
          }
          disabled={resendEmailVerificationResult.isLoading}
        >
          Resend Email
        </Button>
      </Stack>
    );
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h6" fontWeight="bold">
        Create an account
      </Typography>
      {renderForm()}
      <Grid container justifyContent="center">
        <Grid item>
          <Typography>
            Already have an account?{' '}
            <Link component={RouterLink} to="/auth/login">
              Login
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}

Component.displayName = 'Register';
