import { Car, carSchema } from '../interfaces/CarInterface';
import Service, { ServiceError } from '.';
import CarModel from '../models/carModel';

class CarService extends Service<Car> {
  private validLength = 24;
  
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (body: Car): Promise<Car | ServiceError | null> => {
    const parsed = carSchema.safeParse(body);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(body);
  };

  read = async (): Promise<Car[]> => this.model.read();

  readOne = async (id: string): Promise<Car | null | string> => {
    if (id.length < this.validLength) return null;
    const car = await this.model.readOne(id);
    if (!car) return '404';
    return car;
  };

  update = async (id: string, body: Car):
  Promise<Car | ServiceError | null> => {
    // if (id.length < this.validLength) return null;
    const parsed = carSchema.safeParse(body);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    const car = await this.model.update(id, body);
    if (!car) throw new Error();
    return car;
  };

  delete = async (id: string): Promise<Car | null> => {
    // if (id.length < this.validLength) return null;
    const car = await this.model.delete(id);
    return car;
  };
}

export default CarService;