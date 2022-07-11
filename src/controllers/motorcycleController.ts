import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import MotorcycleService from '../services/motorcycleService';
import { Motorcycle } from '../interfaces/MotorcycleInterface';

class MotorcycleController extends Controller<Motorcycle> {
  private _route: string;

  constructor(
    service = new MotorcycleService(),
    route = '/motorcycles',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (
    req: RequestWithBody<Motorcycle>,
    res: Response<Motorcycle | ResponseError | null>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const createMotorcycle = await this.service.create(body);
      if (createMotorcycle && 'error' in createMotorcycle) {
        return res.status(400).json(createMotorcycle);
      } 
      return res.status(201).json(createMotorcycle);
    } catch (error) {
      return res.status(400).json({ error: this.errors.internal });
    }
  };

  read = async (
    _req: Request,
    res: Response,
  ): Promise<typeof res> => {
    try {
      const findMotorcycle = await this.service.read();
      return res.status(200).json(findMotorcycle);
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{ id: string; }>,
    res: Response<Motorcycle | ResponseError | string>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const oneMotorcycle = await this.service.readOne(id);
      if (id.length < 24) {
        return res.status(400).json({ error: this.errors.invalidLength });
      }
      return oneMotorcycle
        ? res.status(200).json(oneMotorcycle)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (err) {
      return res.status(404).json({ error: this.errors.notFound });
    }
  };

  update = async (
    req: RequestWithBody<Motorcycle>,
    res: Response<Motorcycle | ResponseError | null>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    const { body } = req;
    try {
      if (id.length < 24) {
        return res.status(400).json({ error: this.errors.invalidLength });
      }
      const updateMotorcycle = await this.service.update(id, body);
      if (updateMotorcycle && 'error' in updateMotorcycle) {
        return res.status(400).json(updateMotorcycle);
      } 
      return updateMotorcycle
        ? res.status(200).json(updateMotorcycle)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(404).json({ error: this.errors.notFound });
    }
  };

  delete = async (
    req: Request<{ id: string; }>,
    res: Response<Motorcycle | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      if (id.length < 24) {
        return res.status(400).json({ error: this.errors.invalidLength });
      }
      const deleteMotorcycle = await this.service.delete(id);
      return deleteMotorcycle
        ? res.status(204).send(deleteMotorcycle)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (err) {
      return res.status(404).json({ error: this.errors.notFound });
    }
  };
}

export default MotorcycleController;