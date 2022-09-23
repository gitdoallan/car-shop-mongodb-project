import { ErrorRequestHandler } from 'express';
import { statusCode } from '../utils';

export const errorMiddleware: ErrorRequestHandler = async (err, _req, res, _next) => {
  const { status, message } = err;
  if (!status) {
    return res.status(statusCode.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal Server Error' });
  }
  return res.status(status).json({ error: message });
};

export default errorMiddleware;
