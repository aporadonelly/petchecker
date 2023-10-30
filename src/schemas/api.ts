import { z } from 'zod';

export type ErrorCode = z.infer<typeof ErrorCodeSchema>;

export type FetchBaseResult<T> = z.infer<
  ReturnType<typeof createFetchBaseResultSchema<z.ZodType<T>>>
>;

export type FetchBaseError<T> = z.infer<
  ReturnType<typeof createFetchBaseErrorSchema<z.ZodType<T>>>
>;

export type FetchBaseFieldError<T extends object> = z.infer<
  ReturnType<typeof createFetchBaseFieldErrorSchema<z.ZodType<Record<keyof T, string[]>>>>
>;

export const ErrorCodeSchema = z.enum([
  'accounts.wrong-credentials',
  'accounts.email-not-verified',
]);

export function createFetchBaseResultSchema<T extends z.ZodType>(schema: T) {
  return z.object({
    success: z.boolean(),
    message: z.string().min(1),
    data: schema,
  });
}

export function createFetchBaseErrorSchema<T extends z.ZodType>(schema: T) {
  return z.object({
    data: z.object({
      success: z.boolean(),
      message: ErrorCodeSchema,
      data: schema,
    }),
  });
}

export function createFetchBaseFieldErrorSchema<T extends z.ZodType>(schema: T) {
  return z.object({
    data: z.object({
      success: z.boolean(),
      message: z.string().min(1),
      errors: schema,
    }),
  });
}

export function isFetchBaseError<T>(error: unknown): error is FetchBaseError<T> {
  return createFetchBaseErrorSchema(z.any()).safeParse(error).success;
}

export function isFetchBaseFieldError<T extends object>(
  error: unknown
): error is FetchBaseFieldError<T> {
  return createFetchBaseFieldErrorSchema(z.record(z.array(z.string()))).safeParse(error).success;
}
