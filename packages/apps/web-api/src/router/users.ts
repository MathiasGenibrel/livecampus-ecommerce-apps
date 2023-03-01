import { Router, Express } from 'express';
import { UsersController } from '../controller/users.controller';
import { UsersDto } from '../middleware/users-dto';
import { Authorization } from '../middleware/Authorization';

const users = new UsersController();
const dto = new UsersDto();
const auth = new Authorization();

export const usersRouter = (app: Express) => {
  const router = Router({ caseSensitive: false });

  // Get user credential
  // TODO: Add validation pipe middleware (to control input)
  router.post(
    '/login',
    (req, res, next) => dto.credential(req, res, next),
    (req, res) => users.login(req, res)
  );

  // Register an new user in database
  router.post(
    '/register',
    (req, res, next) => dto.credential(req, res, next),
    (req, res) => users.register(req, res)
  );

  // Modify user data
  // TODO: Add validation pipe middleware (to control input)
  router.put(
    '/edit',
    (req, res, next) => auth.validate(req, res, next),
    (req, res, next) => dto.content(req, res, next),
    (req, res) => users.edit(req, res)
  );

  // Remove an user from database
  // TODO: Add validation pipe middleware (to control params)
  router.delete('/delete', users.delete);

  app.use('/users', router);
};
