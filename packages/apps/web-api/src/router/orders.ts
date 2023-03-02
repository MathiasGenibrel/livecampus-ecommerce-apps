import { Router, Express } from 'express';
import { OrdersController } from '../controller/orders.controller';
import { OrdersDto } from '../middleware/orders-dto';
import { Authorization } from '../middleware/authorization';

const orders = new OrdersController();
const dto = new OrdersDto();
const auth = new Authorization();

export const ordersRouter = (app: Express) => {
  const router = Router({ caseSensitive: false });

  // TODO: Add validation pipe middleware (to control params)
  router.get('/history', orders.history);

  router.post(
    '/',
    (res, req, next) => auth.customer(res, req, next),
    (res, req, next) => dto.content(res, req, next),
    (res, req) => orders.create(res, req)
  );

  // TODO: Add auth && validation pipe middleware
  router.put('/updateStatus', orders.updateStatus);

  app.use('/orders', router);
};
