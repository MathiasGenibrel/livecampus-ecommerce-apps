import { Router, Express } from 'express';
import { UsersController } from '../controller/users.controller';

const users = new UsersController();

export const usersRouter = (app: Express) => {
  const router = Router({ caseSensitive: false });

  // Get user credential
  router.get('/login', users.login);

  // Register an new user in database
  router.post('/register', users.register);

  // Modify user data
  router.put('/edit', users.edit);

  // Remove an user from database
  router.delete('/delete', users.delete);

  app.use('/users', router);
};
