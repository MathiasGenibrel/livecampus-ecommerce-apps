import { Router, Express } from 'express';
import { ProductsController } from '../controller/products.controller';
import { ProductsDto } from '../middleware/products-dto';
import { Authorization } from '../middleware/authorization';

const products = new ProductsController();
const dto = new ProductsDto();
const auth = new Authorization();

export const productsRouter = (app: Express) => {
  const router = Router({ caseSensitive: false });

  router.get('/', products.find);
  router.get('/:id', products.findOne);

  router.post(
    '/create',
    (req, res, next) => auth.admin(req, res, next),
    (req, res, next) => dto.creation(req, res, next),
    (req, res) => products.create(req, res)
  );

  // TODO: Add validation pipe middleware (to control input)
  router.patch('/edit', products.edit);
  router.delete('/delete', products.delete);

  app.use('/products', router);
};
