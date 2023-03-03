import React, { FC } from 'react';
import { Products } from '../../types/products';
import { Button } from 'evergreen-ui';

export const Card: FC<Products> = (product) => {
  return (
    <li key={product.id} className={'flex flex-col my-2 gap-2'}>
      <img
        src={product.image_link}
        alt={product.name}
        className={'aspect-square object-scale-down'}
      />

      <article className={'flex items-center justify-between'}>
        <h3 className={'text-lg font-medium'}>{product.name}</h3>
        <span className={'font-medium'}>{product.price} $</span>
      </article>

      <p className={'line-clamp-2'}>{product.description}</p>

      <Button appearance={'primary'} className={'w-fit'}>
        Add to cart
      </Button>
    </li>
  );
};
