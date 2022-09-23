import { z } from 'zod';
import { schema as VSchema } from './IVehicle';

export const schema = VSchema.extend({
  doorsQty: z.number().int().gte(2).lte(4),
  seatsQty: z.number().int().gte(2).lte(7),
});

export type ICar = z.infer<typeof schema >;
