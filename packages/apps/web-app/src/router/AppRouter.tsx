import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Landing } from '../views/Landing';
import { NotFound } from '../views/errors/NotFound';
import { Headers } from '../components/Header/Headers';

export const AppRouter = () => {
  return (
    <>
      <Headers />
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path={'/*'} element={<NotFound />} />
      </Routes>
    </>
  );
};
