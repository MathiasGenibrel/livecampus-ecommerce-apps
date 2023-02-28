import { Express } from 'express';
import { usersRouter } from './users';

export const router = (app: Express) => {
  usersRouter(app);
};
