import { Router } from 'express';
import { CarsController } from '../controllers/cars.controller';
import { CarsService } from '../services/cars.service';
import { CarsModel } from '../models/cars.model';

const router = Router();

const carsModel = new CarsModel();
const carsService = new CarsService(carsModel);

router.post('/', (req, res) => new CarsController(carsService).create(req, res));
router.get('/', (req, res) => new CarsController(carsService).read(req, res));

export default router;
