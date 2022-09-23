import { Model, isValidObjectId } from 'mongoose';
import { IModel } from '../interfaces/IModel';
import { AsyncError } from '../utils';

export abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  async create(obj: T): Promise<T> {
    return this._model.create(obj);
  }

  async read(): Promise<T[]> {
    return this._model.find().exec();
  }

  async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new AsyncError(404, 'Object Not Found');
    return this._model.findById(id).exec();
  }

  async update(id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(id)) throw new AsyncError(404, 'ID Not Found');
    return this._model.findByIdAndUpdate({ id }, { obj });
  }

  async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new AsyncError(404, 'ID Not Found');
    return this._model.findByIdAndDelete(id).exec();
  }
}

export default MongoModel;
