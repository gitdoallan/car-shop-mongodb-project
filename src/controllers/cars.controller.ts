import { Response } from 'express';
import { ICar, IService } from '../interfaces';
import { statusCode } from '../utils';

export class CarsController {
  constructor(private service: IService<ICar>) {}

  async create(req: any, res: any): Promise<Response> {
    const car: ICar = req.body;
    const newCar = await this.service.create(car);
    return res.status(statusCode.CREATED).json(newCar);
  }

  async read(_req: any, res: any): Promise<Response> {
    const cars = await this.service.read();
    return res.status(statusCode.OK).json(cars);
  }
}

export default CarsController;
