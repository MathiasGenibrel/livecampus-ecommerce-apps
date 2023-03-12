import { createContext, Dispatch, FC, useReducer } from 'react';
import {
  AuthCredential,
  NullAuthCredential,
} from '../../repository/auth/repository';
import { Action, AuthActionType, AuthContextProviderProps } from './auth-types';
import { environment } from '../../environment/environment';
import { useQuery } from 'react-query';
import { useAuthRepository } from '../../hooks/useAuthRepository';

const LOCAL_STORAGE_AUTH_TOKEN = localStorage.getItem(
  environment.localStorageKeys.auth
);

const initAuthValue: NullAuthCredential = {
  email: null,
  role: null,
  token: null,
};

export const AUTH_CONTEXT = createContext<AuthCredential | NullAuthCredential>(
  initAuthValue
);
export const AUTH_CONTEXT_DISPATCHER = createContext<Dispatch<Action> | null>(
  null
);

const dispatcher = (
  state: AuthCredential | NullAuthCredential,
  action: Action
): AuthCredential | NullAuthCredential => {
  const currentState = { ...state } as AuthCredential;

  switch (action.type) {
    case AuthActionType.CONNECT:
      if (!action.credential)
        throw new TypeError('Credential are necessary to connect an user.');
      if (!action.token)
        throw new TypeError('Token are necessary to connect an user.');

      localStorage.setItem(environment.localStorageKeys.auth, action.token);
      return { ...action.credential, token: action.token };

    case AuthActionType.DISCONNECT:
      localStorage.removeItem(environment.localStorageKeys.auth);
      return { ...initAuthValue };

    case AuthActionType.EDIT:
      if (!action.credential)
        throw new TypeError('Credential are necessary to update user profile.');
      return { ...currentState, ...action.credential };

    default:
      return currentState;
  }
};

export const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children,
}) => {
  const auth = useAuthRepository();
  const { data } = useQuery('getSessionCredential', () =>
    auth.userCredential(LOCAL_STORAGE_AUTH_TOKEN)
  );

  const [state, dispatch] = useReducer(dispatcher, data ?? initAuthValue);

  if (data && !state)
    dispatch({
      type: AuthActionType.CONNECT,
      token: data.token,
      credential: { ...data },
    });

  return (
    <AUTH_CONTEXT.Provider value={state}>
      <AUTH_CONTEXT_DISPATCHER.Provider value={dispatch}>
        {children}
      </AUTH_CONTEXT_DISPATCHER.Provider>
    </AUTH_CONTEXT.Provider>
  );
};
