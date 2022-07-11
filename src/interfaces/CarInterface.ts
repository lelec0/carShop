import * as z from 'zod';
import { VehicleSchema } from './VehicleInterface';

const carSchema = VehicleSchema.extend({
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
});

export type Car = (z.infer<typeof carSchema>);
export { carSchema };
