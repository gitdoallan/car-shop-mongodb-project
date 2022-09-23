import * as sinon from 'sinon';
import chai from 'chai';
import { mock } from '../../mocks/cars.mock';
import { CarsModel } from '../../../models/cars.model';
import { Model } from 'mongoose';

const { expect } = chai;

describe('Model: Cars', () => {

  before(async () => {
    sinon.stub(Model, 'create').resolves(mock);
  });

  after(()=>{
    sinon.restore();
  })

  it('Model can create object successfully', async () => {
    const result = await new CarsModel().create(mock);
    expect(result).to.be.an('object');
  });

});