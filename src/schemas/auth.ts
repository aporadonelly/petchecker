import { z } from 'zod';

import { UserSchema } from './user';

export type Auth<T> = z.infer<ReturnType<typeof createAuthSchema<z.ZodType<T>>>>;

export type Login = z.infer<typeof LoginSchema>;

export type Register = z.infer<typeof RegisterSchema>;

export type ResendEmailVerification = z.infer<typeof ResendEmailVerificationSchema>;

export type ForgotPassword = z.infer<typeof ForgotPasswordSchema>;

export type VerifyEmail = z.infer<typeof VerifyEmailSchema>;

export const LoginSchema = UserSchema.pick({ email: true }).merge(
  z.object({
    password: z.string().min(1),
  })
);

export const RegisterSchema = UserSchema.pick({
  first_name: true,
  last_name: true,
  email: true,
  subscribed_to_mailing_list: true,
}).and(
  z
    .object({
      password: z.string().min(1),
      confirm_password: z.string().min(1),
    })
    .refine((values) => values.password === values.confirm_password, {
      message: 'Passwords does not match',
      path: ['confirm_password'],
    })
);

export const ResendEmailVerificationSchema = UserSchema.pick({
  email: true,
});

export const ForgotPasswordSchema = UserSchema.pick({
  email: true,
});

export const VerifyEmailSchema = z.object({
  id: z.string().min(1),
  hash: z.string().min(1),
  expires: z.string().min(1),
  signature: z.string().min(1),
});

export function createAuthSchema<T extends z.ZodType>(schema: T) {
  return z
    .object({
      token: z.string().min(1),
    })
    .and(schema);
}
