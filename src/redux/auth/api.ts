import forEach from 'lodash/forEach';

import { FetchBaseResult } from '@/schemas/api';
import {
  Auth,
  Login,
  Register,
  ResendEmailVerification,
  ForgotPassword,
  VerifyEmail,
} from '@/schemas/auth';
import { User } from '@/schemas/user';
import { api } from '@/redux/api';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<FetchBaseResult<Auth<{ account: User }>>, Login>({
      query: (data) => ({
        url: '/accounts/login',
        method: 'POST',
        body: data,
      }),
    }),
    register: builder.mutation<FetchBaseResult<User>, Register>({
      query: (data) => ({
        url: '/accounts/register',
        method: 'POST',
        body: data,
      }),
    }),
    forgotPassword: builder.mutation<FetchBaseResult<Pick<User, 'email'>>, ForgotPassword>({
      query: (data) => ({
        url: '/accounts/send-password-reset-link',
        method: 'PUT',
        body: data,
      }),
    }),
    resendEmailVerification: builder.mutation<
      FetchBaseResult<Pick<User, 'email'>>,
      ResendEmailVerification
    >({
      query: (data) => ({
        url: '/accounts/resend-email-verification',
        method: 'PUT',
        body: data,
      }),
    }),
    verifyEmail: builder.mutation<FetchBaseResult<Auth<Pick<User, 'type' | 'role'>>>, VerifyEmail>({
      query: ({ id, hash, ...data }) => {
        const params = new URLSearchParams();

        forEach(data, (value, key) => {
          params.append(key, value);
        });

        return {
          url: `/accounts/verify-email/${id}/${hash}`,
          method: 'PUT',
          params,
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useResendEmailVerificationMutation,
  useForgotPasswordMutation,
  useVerifyEmailMutation,
} = authApi;
