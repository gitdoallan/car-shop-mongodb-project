import express from 'express';
import carsRouter from './cars.routes';
import { errorMiddleware } from '../middlewares';

const router = express.Router();

router.use('/cars', carsRouter);

router.use(errorMiddleware);

export default router;
