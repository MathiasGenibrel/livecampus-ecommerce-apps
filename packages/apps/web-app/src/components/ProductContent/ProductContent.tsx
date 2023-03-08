import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import * as Joi from 'joi';

import { Button, toaster } from 'evergreen-ui';

import { Products } from '../../types/products';
import clsx from 'clsx';

interface ProductForm {
  quantity: number;
}

const schema = Joi.object({
  quantity: Joi.number().min(1).max(99).required(),
});

export const ProductContent: FC<Products> = (product) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductForm>({
    resolver: joiResolver(schema),
  });

  const onSubmit: SubmitHandler<ProductForm> = (data, event) => {
    if (!event) throw new ReferenceError('Event is undefined');

    event.preventDefault();
    console.log(data);
  };

  // Display toast error for on each refresh of the component if the quantity input has an error (anonymous function)
  (() => errors.quantity && toaster.danger(errors.quantity.message))();

  return (
    <>
      <img src={product.image_link} alt={product.name} />
      <section className={'flex justify-between w-full'}>
        <h1 className={'text-2xl font-medium'}>{product.name}</h1>
        <span className={'text-xl font-medium'}>{product.price} $</span>
      </section>

      <section className={'flex flex-col gap-2 my-4'}>
        <h3 className={'text-xl font-medium'}>Description</h3>
        <p className={'text-sm opacity-[0.65]'}>{product.description}</p>
      </section>

      <form
        className={'flex gap-4 justify-between'}
        onSubmit={handleSubmit(onSubmit)}
        noValidate={true}
      >
        <Button appearance={'primary'} height={40} className={'w-3/4'}>
          Add to cart
        </Button>
        <input
          className={clsx(
            'w-1/4 px-4 py-2 border rounded text-sm',
            errors.quantity && 'border-red-500 bg-red-500/10'
          )}
          {...register('quantity')}
          type={'number'}
          defaultValue={1}
          min={1}
          max={99}
        />
      </form>
    </>
  );
};
