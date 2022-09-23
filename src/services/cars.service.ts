import { AsyncError, statusCode } from '../utils';
import { IService, IModel, ICar, ICarSchema } from '../interfaces';

export class CarsService implements IService<ICar> {
  private _cars: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._cars = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const { success } = ICarSchema.safeParse(obj);
    if (!success) throw new AsyncError(statusCode.BAD_REQUEST, 'Invalid Fields');

    const result = await this._cars.create(obj);
    return result;
  }

  public async read(): Promise<ICar[]> {
    const result = await this._cars.read();
    return result;
  }
}

export default CarsService;
