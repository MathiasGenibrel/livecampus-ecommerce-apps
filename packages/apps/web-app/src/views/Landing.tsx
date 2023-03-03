import React from 'react';
import { Card } from '../components/Card/Card';
import { useQuery } from 'react-query';
import { LocalRepository } from '../repository/products/local-repository';

const productsRepository = new LocalRepository();

export const Landing = () => {
  const { data } = useQuery(
    'products',
    async () => await productsRepository.findAll()
  );

  return (
    <main className={'mx-4 my-8'}>
      <h2 className={'text-xl'}>Headphones For You!</h2>
      <ul className={'flex flex-wrap my-4 gap-4'}>
        {data && data.map((product) => <Card {...product} />)}
      </ul>
    </main>
  );
};
