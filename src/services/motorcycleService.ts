import { Motorcycle, MotorcycleSchema } from '../interfaces/MotorcycleInterface';
import Service, { ServiceError } from '.';
import MotorcycleModel from '../models/motorcycleModel';

class MotorcycleService extends Service<Motorcycle> {
  constructor(model = new MotorcycleModel()) {
    super(model);
  }

  create = async (body: Motorcycle): Promise<Motorcycle | ServiceError | null> => {
    const parsed = MotorcycleSchema.safeParse(body);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(body);
  };

  read = async (): Promise<Motorcycle[]> => this.model.read();

  readOne = async (id: string): Promise<Motorcycle | null | string> => {
    const motorcycle = await this.model.readOne(id);
    return motorcycle;
  };

  update = async (id: string, body: Motorcycle):
  Promise<Motorcycle | ServiceError | null> => {
    // if (id.length < this.validLength) return null;
    const parsed = MotorcycleSchema.safeParse(body);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    const motorcycle = await this.model.update(id, body);
    return motorcycle;
  };

  delete = async (id: string): Promise<Motorcycle | null> => {
    // if (id.length < this.validLength) return null;
    const motorcycle = await this.model.delete(id);
    return motorcycle;
  };
}

export default MotorcycleService;