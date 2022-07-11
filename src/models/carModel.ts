import { Schema, model as createModel, Document } from 'mongoose';
import MongoModel from './mongoModel';
import { Car } from '../interfaces/CarInterface';

interface CarDocument extends Car, Document { }

const carSchema = new Schema<CarDocument>({
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
  doorsQty: {
    type: Number,
    required: true,
  },
  seatsQty: {
    type: Number,
    required: true,
  },
}, { versionKey: false });

class CarModel extends MongoModel<Car> {
  constructor(model = createModel('Car', carSchema)) {
    super(model);
  }
}

export default CarModel;