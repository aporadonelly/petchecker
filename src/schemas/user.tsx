import dayjs, { Dayjs } from 'dayjs';
import { z } from 'zod';

import { PetOwnerSchema } from './pet-owner';

export type User = z.infer<typeof UserSchema>;

export const UserSchema = z.object({
  id: z.string().uuid(),
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email_verified_at: z.string().nullable(),
  email: z.string().email().min(1),
  phone: z.string().nullable(),
  // dob: z.union([z.string(), z.instanceof(dayjs as unknown as typeof Dayjs)]).nullable(),
  dob: z.string().nullable(),
  address_line: z.string().nullable(),
  zip: z.string().nullable(),
  city: z.string().nullable(),
  approved_terms: z.boolean(),
  approved_terms_at: z.string().nullable(),
  subscribed_to_mailing_list: z.boolean(),
  type: z.enum(['PET_OWNER']),
  role: z.enum(['PET_OWNER.ADMIN']),
  language: z.string().min(1),
  // profile_picture: z.union([z.string(), z.instanceof(File)]),
  profile_picture: z.string().min(1),
  pet_owner: PetOwnerSchema,
});
