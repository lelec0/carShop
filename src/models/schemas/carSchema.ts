import { Schema, model, Document } from 'mongoose';
import { Car } from '../../interfaces/CarInterface';

const CarSchema = new Schema<Car>({
  model: {
    type: String,
  },
  year: {
    type: Number,
  },
  color: {
    type: String,
  },
  status: {
    type: String,
  },
  buyValue: {
    type: Number,
  },
  doorsQty: {
    type: Number,
  },
  seatsQty: {
    type: Number,
  },
}, { versionKey: false });

const CarMongooseModel = model<Car>('Car', CarSchema);

export default CarMongooseModel;