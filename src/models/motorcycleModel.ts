import { Schema, model as createModel, Document } from 'mongoose';
import MongoModel from './mongoModel';
import { Motorcycle } from '../interfaces/MotorcycleInterface';

interface CarDocument extends Motorcycle, Document { }

const motorcycleSchema = new Schema<CarDocument>({
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  buyValue: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  engineCapacity: {
    type: Number,
    required: true,
  },
}, { versionKey: false });

class MotorcycleModel extends MongoModel<Motorcycle> {
  constructor(model = createModel('Motorcycle', motorcycleSchema)) {
    super(model);
  }
}

export default MotorcycleModel;