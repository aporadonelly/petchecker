import { useEffect } from 'react';
import { useNavigate, useSearchParams, Navigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { VerifyEmail } from '@/schemas/auth';
import { useVerifyEmailMutation } from '@/redux/auth/api';

export function Component() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [verifyEmail, verifyEmailResult] = useVerifyEmailMutation();

  useEffect(() => {
    const params = {
      id: searchParams.get('id'),
      hash: searchParams.get('hash'),
      expires: searchParams.get('expires'),
      signature: searchParams.get('signature'),
    } as VerifyEmail;
    verifyEmail(params);
  }, [searchParams]);

  if (verifyEmailResult.isSuccess) {
    return (
      <Stack spacing={2}>
        <Typography variant="h6" fontWeight="bold">
          Welcome
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Your account has been verified
        </Typography>
        <Button onClick={() => navigate('/')}>Go to dashboard</Button>
      </Stack>
    );
  }

  if (verifyEmailResult.isError) return <Navigate to="/" replace />;

  return null;
}

Component.displayName = 'VerifyEmail';
