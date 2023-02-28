import { Router, Express } from 'express';
import { ProductsController } from '../controller/products.controller';

const products = new ProductsController();

export const productsRouter = (app: Express) => {
  const router = Router({ caseSensitive: false });

  router.get('/', products.find);
  router.get('/:id', products.findOne);

  // TODO: Add validation pipe middleware (to control input)
  router.post('/create', products.create);
  router.patch('/edit', products.edit);
  router.delete('/delete', products.delete);

  app.use('/products', router);
};
