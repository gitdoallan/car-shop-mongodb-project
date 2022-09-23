import * as sinon from 'sinon';
import chai from 'chai';
import { mock } from '../../mocks/cars.mock';
import { CarsModel } from '../../../models/cars.model';
import { CarsService } from '../../../services/cars.service';
import { CarsController } from '../../../controllers/cars.controller';
import { statusCode } from '../../../utils';

const { expect } = chai;

describe('Controller: Cars', () => {
    const carsModel = new CarsModel();
    const carsService = new CarsService(carsModel);

    const req = {} as any;
    const res = {} as any;

  before(async () => {
    sinon.stub(carsService, 'create').resolves(mock);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);

  });

  after(()=>{
    sinon.restore();
  })

  it('Returns status OK successfully', async () => {
    req.body = mock;

    await new CarsController(carsService).create(req, res);

    expect((res.status).calledWith(statusCode.CREATED)).to.be.true;
    expect((res.json).calledWith(mock)).to.be.true;
  });

});