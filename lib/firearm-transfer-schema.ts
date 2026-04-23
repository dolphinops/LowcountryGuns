import { z } from 'zod';

const line = (label: string, max: number) =>
  z.string().trim().min(1, `${label} is required`).max(max);

export const firearmTransferFormSchema = z.object({
  name: z.string().trim().min(2, 'Name is too short').max(120),
  phone: z.string().trim().min(7, 'Phone is required').max(40),
  email: z.string().trim().email('Invalid email'),
  make: line('Make', 120),
  typeOfAction: line('Type of action', 120),
  model: line('Model', 120),
  caliber: line('Caliber', 80),
  barrelLength: line('Barrel length', 80),
  finish: line('Finish', 120),
  serialNumber: line('Serial number', 80),
  dealerName: line('Dealer name', 120),
  orderNumber: line('Order number', 80),
  otherIdentifyingInfo: z.string().trim().max(2000).optional().default(''),
});

export type FirearmTransferFormPayload = z.infer<typeof firearmTransferFormSchema>;
