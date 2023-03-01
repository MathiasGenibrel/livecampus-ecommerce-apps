import { Router, Express } from 'express';
import { OrdersController } from '../controller/orders.controller';

const orders = new OrdersController();

export const ordersRouter = (app: Express) => {
  const router = Router({ caseSensitive: false });

  // TODO: Add validation pipe middleware (to control params)
  router.get('/history', orders.history);

  // TODO: Add validation pipe middleware (to control input)
  router.post('/', orders.create);

  // TODO: Add auth && validation pipe middleware
  router.put('/updateStatus', orders.updateStatus);

  app.use('/orders', router);
};
