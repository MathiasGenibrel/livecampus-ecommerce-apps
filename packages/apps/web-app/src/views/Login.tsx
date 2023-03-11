import React from 'react';
import { Headers } from '../components/Header/Headers';
import { Button, TextInputField } from 'evergreen-ui';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <>
      <Headers />

      <main className="px-4">
        <h1 className="text-2xl text-center my-4">Account Login</h1>

        <form className="my-8">
          <TextInputField label={'Email'} type="email" autoComplete="email" />
          <TextInputField
            label={'Password'}
            type="password"
            autoComplete="current-password"
          />
          <Button className="w-full" appearance="primary">
            Login
          </Button>
          <span className="flex text-xs text-gray-500 justify-center p-2 gap-2">
            You do not have an account ?
            <Link className="font-medium text-blue-500" to={'/register'}>
              Create an account
            </Link>
          </span>
        </form>
      </main>
    </>
  );
};
