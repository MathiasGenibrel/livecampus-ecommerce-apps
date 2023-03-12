import { createContext, Dispatch, FC, useReducer } from 'react';
import { AuthCredential, Credential } from '../../repository/auth/repository';
import { Action, AuthActionType, AuthContextProviderProps } from './auth-types';
import { environment } from '../../environment/environment';
import { useQuery } from 'react-query';
import { useAuthRepository } from '../../hooks/useAuthRepository';

const LOCAL_STORAGE_AUTH_TOKEN = localStorage.getItem(
  environment.localStorageKeys.auth
);
export const AUTH_CONTEXT = createContext<Credential | null>(null);
export const AUTH_CONTEXT_DISPATCHER = createContext<Dispatch<Action> | null>(
  null
);

const dispatcher = (
  state: AuthCredential | null,
  action: Action
): AuthCredential | null => {
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
      return null;

    case AuthActionType.EDIT:
      if (!action.credential)
        throw new TypeError('Credential are necessary to update user profile.');
      return { ...currentState, ...action.credential };

    default:
      return null;
  }
};

export const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children,
}) => {
  const auth = useAuthRepository();
  const { data } = useQuery('getSessionCredential', () =>
    auth.userCredential(LOCAL_STORAGE_AUTH_TOKEN)
  );

  const [state, dispatch] = useReducer(dispatcher, data ?? null);

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
