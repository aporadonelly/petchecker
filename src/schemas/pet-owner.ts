import { z } from 'zod';

export type PetOwner = z.infer<typeof PetOwnerSchema>;

export const PetOwnerSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  address_line_1: z.string().nullable(),
  address_line_2: z.string().nullable(),
  address_line_3: z.string().nullable(),
  zip: z.string().nullable(),
  city: z.string().nullable(),
  region: z.string().nullable(),
  country: z.string().nullable(),
  approved_terms: z.boolean(),
  approved_terms_at: z.string().nullable(),
  profile_picture: z.union([z.string(), z.instanceof(File)]),
  vet_practice_id: z.string().uuid().nullable(),
});
