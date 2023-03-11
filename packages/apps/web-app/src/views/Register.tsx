import React from 'react';
import { Headers } from '../components/Header/Headers';
import { Button, TextInputField } from 'evergreen-ui';
import { Link } from 'react-router-dom';

export const Register = () => {
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
            autoComplete="new-password"
          />
          <TextInputField
            label={'Confirm Password'}
            type="password"
            autoComplete="new-password"
          />
          <Button className="w-full" appearance="primary">
            Create account
          </Button>
          <span className="flex text-xs text-gray-500 justify-center p-2 gap-2">
            Already have an account ?
            <Link className="font-medium text-blue-500" to={'/login'}>
              Log in to your account
            </Link>
          </span>
        </form>
      </main>
    </>
  );
};
