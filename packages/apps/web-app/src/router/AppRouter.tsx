import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Landing } from '../views/Landing';
import { NotFoundError } from '../views/errors/NotFoundError';
import { Product } from '../views/Product';
import { InternalServerError } from '../views/errors/InternalServerError';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/product/:id',
    element: <Product />,
    errorElement: <InternalServerError />,
  },
  {
    path: '/*',
    element: <NotFoundError />,
  },
]);
