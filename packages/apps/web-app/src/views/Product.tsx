import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';
import { useQuery } from 'react-query';

import { Headers } from '../components/Header/Headers';
import { ProductContent } from '../components/ProductContent/ProductContent';

import { LocalRepository } from '../repository/products/local-repository';

const productsRepository = new LocalRepository();

export const Product = () => {
  const params = useParams();

  if (!params.id)
    throw new ReferenceError('The id params is null or undefined');
  if (!Number(params.id))
    throw new ReferenceError('The id params is not a number');

  const { data, isLoading } = useQuery(
    `product-${params.id}`,
    async () => await productsRepository.find(Number(params.id))
  );

  return (
    <>
      <Headers />
      <main>
        <article className={'m-4'}>
          <Link to={'../'} className={'flex items-center gap-2'}>
            <ArrowLeftCircleFill />
            <span>Back</span>
          </Link>
          {data && <ProductContent {...data} />}
        </article>
      </main>
    </>
  );
};
