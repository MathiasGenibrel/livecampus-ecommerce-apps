import { Express } from 'express';
import { usersRouter } from './users';
import { ordersRouter } from './orders';

export const router = (app: Express) => {
  usersRouter(app);
  ordersRouter(app);
};
