import { Schema, model } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import { MongoModel } from './mongo.model';

const schema = new Schema({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  status: { type: Boolean, required: false },
  buyValue: { type: Number, required: true },
  doorsQty: { type: Number, required: true },
  seatsQty: { type: Number, required: true },
});

export class CarsModel extends MongoModel<ICar> {
  constructor() {
    super(model('Cars', schema));
  }
}

export default CarsModel;
