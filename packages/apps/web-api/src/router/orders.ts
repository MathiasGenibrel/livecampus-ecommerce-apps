import { Router, Express } from 'express';
import { OrdersController } from '../controller/orders.controller';

const orders = new OrdersController();

export const ordersRouter = (app: Express) => {
  const router = Router({ caseSensitive: false });

  router.get('/history', orders.history);

  router.post('/', orders.create);

  router.put('/updateStatus', orders.updateStatus);

  app.use('/orders', router);
};
