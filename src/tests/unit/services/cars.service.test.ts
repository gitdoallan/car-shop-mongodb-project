import * as sinon from 'sinon';
import chai from 'chai';
import { CarsModel } from '../../../models/cars.model';
import { CarsService } from '../../../services/cars.service';
import { mock } from '../../mocks/cars.mock';

const { expect } = chai;

describe('Service: Cars', () => {
    const carsModel = new CarsModel();

  before(async () => {
    sinon.stub(carsModel, 'create').resolves(mock);
  });

  after(()=>{
    sinon.restore();
  })

  it('Can create successfully', async () => {
    const result = await new CarsService(carsModel).create(mock);
    expect(result).to.be.deep.equal(mock);
  });

});