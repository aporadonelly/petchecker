import { useForm } from 'react-hook-form-mui';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { Link as RouterLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { isFetchBaseFieldError } from '@/schemas/api';
import { ForgotPassword, ForgotPasswordSchema } from '@/schemas/auth';
import { useForgotPasswordMutation } from '@/redux/auth/api';

export function Component() {
  const formContext = useForm<ForgotPassword>({
    resolver: zodResolver(ForgotPasswordSchema),
  });
  const { setError } = formContext;

  const [forgotPassword, forgotPasswordResult] = useForgotPasswordMutation();

  const handleSubmit = async (values: ForgotPassword) => {
    try {
      await forgotPassword(values).unwrap();
    } catch (error) {
      if (isFetchBaseFieldError<ForgotPassword>(error)) {
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
        <TextFieldElement
          type="email"
          name="email"
          label="Email Address"
          placeholder="Email Address"
          required
        />
        <Button type="submit" disabled={forgotPasswordResult.isLoading}>
          Forgot Password
        </Button>
      </Stack>
    </FormContainer>
  );

  return (
    <Stack spacing={2}>
      <Typography variant="h6" fontWeight="bold">
        Forgot Password
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Enter the email address associated with your account and we'll send you a link to reset your
        password
      </Typography>
      {renderForm()}
      <Grid container justifyContent="center">
        <Grid item>
          <Typography>
            Don't have an account?{' '}
            <Link component={RouterLink} to="/auth/register">
              Register
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}

Component.displayName = 'ForgotPassword';
