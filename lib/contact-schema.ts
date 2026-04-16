import { z } from 'zod';

export const CONTACT_SUBJECTS = [
  'General Inquiry',
  'Range Membership',
  'Training / Courses',
  'FFL Transfers',
  'Private Parties',
  'Product Availability',
] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Name is too short').max(120),
  phone: z.string().trim().min(7, 'Phone is required').max(40),
  email: z.string().trim().email('Invalid email'),
  subject: z.enum(CONTACT_SUBJECTS),
  message: z.string().trim().min(10, 'Message is too short').max(5000),
});

export type ContactFormPayload = z.infer<typeof contactFormSchema>;
