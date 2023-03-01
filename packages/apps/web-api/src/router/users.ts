import { Router, Express } from 'express';
import { UsersController } from '../controller/users.controller';

const users = new UsersController();

export const usersRouter = (app: Express) => {
  const router = Router({ caseSensitive: false });

  // Get user credential
  // TODO: Add validation pipe middleware (to control input)
  router.post('/login', users.login);

  // Register an new user in database
  // TODO: Add validation pipe middleware (to control input)
  router.post('/register', users.register);

  // Modify user data
  // TODO: Add validation pipe middleware (to control input)
  router.put('/edit', users.edit);

  // Remove an user from database
  // TODO: Add validation pipe middleware (to control params)
  router.delete('/delete', users.delete);

  app.use('/users', router);
};
