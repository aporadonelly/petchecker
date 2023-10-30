import { useTranslation } from 'react-i18next';
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

import { isFetchBaseError, isFetchBaseFieldError } from '@/schemas/api';
import { Login, LoginSchema } from '@/schemas/auth';
import { useLoginMutation } from '@/redux/auth/api';

export function Component() {
  const { t } = useTranslation(['message']);
  const formContext = useForm<Login>({
    defaultValues: {
      email: 'nk@gmail.com',
      password: 'P4ssw0rd!',
    },
    resolver: zodResolver(LoginSchema),
  });
  const { setError } = formContext;

  const [login, loginResult] = useLoginMutation();

  const handleSubmit = async (values: Login) => {
    try {
      await login(values).unwrap();
    } catch (error) {
      if (isFetchBaseFieldError<Login>(error)) {
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
        <PasswordElement name="password" label="Password" placeholder="Password" required />
        <Grid container alignItems="center">
          <Grid item xs>
            <CheckboxElement name="remember_me" label="Keep me signed in" />
          </Grid>
          <Grid item>
            <Link component={RouterLink} to="/auth/forgot-password">
              Forgot password?
            </Link>
          </Grid>
        </Grid>
        {isFetchBaseError(loginResult.error) && (
          <Alert severity="error">{t(loginResult.error.data.message)}</Alert>
        )}
        <Button type="submit" disabled={loginResult.isLoading}>
          Sign in
        </Button>
      </Stack>
    </FormContainer>
  );

  return (
    <Stack spacing={2}>
      <Typography variant="h6" fontWeight="bold">
        Sign in
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

Component.displayName = 'Login';
