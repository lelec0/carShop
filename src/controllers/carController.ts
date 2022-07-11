import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import CarService from '../services/carService';
import { Car } from '../interfaces/CarInterface';

class CarController extends Controller<Car> {
  private _route: string;

  constructor(
    service = new CarService(),
    route = '/cars',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (
    req: RequestWithBody<Car>,
    res: Response<Car | ResponseError | null>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const createCars = await this.service.create(body);
      if (createCars && 'error' in createCars) {
        return res.status(400).json(createCars);
      } 
      return res.status(201).json(createCars);
    } catch (error) {
      return res.status(400).json({ error: this.errors.internal });
    }
  };

  read = async (
    _req: Request,
    res: Response,
  ): Promise<typeof res> => {
    try {
      const findCars = await this.service.read();
      return res.status(200).json(findCars);
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{ id: string; }>,
    res: Response<Car | ResponseError | string>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const oneCar = await this.service.readOne(id);
      if (oneCar === '404') {
        return res.status(404).json({ error: this.errors.notFound });
      } 
      return oneCar
        ? res.status(200).json(oneCar)
        : res.status(400).json({ error: this.errors.invalidLength });
    } catch (err) {
      return res.status(404).json({ error: this.errors.notFound });
    }
  };

  update = async (
    req: RequestWithBody<Car>,
    res: Response<Car | ResponseError | null>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    const { body } = req;
    try {
      if (id.length < 24) {
        return res.status(400).json({ error: this.errors.invalidLength });
      }
      const updateCar = await this.service.update(id, body);
      if (updateCar && 'error' in updateCar) {
        return res.status(400).json(updateCar);
      } 
      return updateCar
        ? res.status(200).json(updateCar)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(404).json({ error: this.errors.notFound });
    }
  };

  delete = async (
    req: Request<{ id: string; }>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      if (id.length < 24) {
        return res.status(400).json({ error: this.errors.invalidLength });
      }
      const deleteCar = await this.service.delete(id);
      return deleteCar
        ? res.status(204).send(deleteCar)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (err) {
      return res.status(404).json({ error: this.errors.notFound });
    }
  };
}

export default CarController;