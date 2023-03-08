import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { Card } from '../components/Card/Card';
import { useQuery } from 'react-query';
import { LocalRepository } from '../repository/products/local-repository';
import { CardSkeleton } from '../components/Card/CardSkeleton';
import { Hero } from '../components/Hero/Hero';

const productsRepository = new LocalRepository();

export const Landing = () => {
  const navigate: NavigateFunction = useNavigate();
  const { data, isLoading } = useQuery(
    'products',
    async () => await productsRepository.findAll()
  );

  return (
    <main>
      <Hero />

      <article className={'mx-4 my-8'}>
        <h2 className={'text-xl'}>Headphones For You!</h2>
        <ul className={'flex flex-wrap my-4 gap-4'}>
          {isLoading &&
            // Array of skeleton card
            Array.from(Array(6).keys()).map((index) => (
              <CardSkeleton key={index} />
            ))}
          {data &&
            data.map((product) => (
              <Card key={product.id} product={product} navigate={navigate} />
            ))}
        </ul>
      </article>
    </main>
  );
};
