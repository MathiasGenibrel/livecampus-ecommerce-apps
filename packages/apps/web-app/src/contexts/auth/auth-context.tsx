import { createContext, Dispatch, FC, useReducer } from 'react';
import { Credential } from '../../repository/auth/repository';
import { Action, AuthActionType, AuthContextProviderProps } from './auth-types';

export const AUTH_CONTEXT = createContext<Credential | null>(null);
export const AUTH_CONTEXT_DISPATCHER = createContext<Dispatch<Action> | null>(
  null
);

const dispatcher = (
  state: Credential | null,
  action: Action
): Credential | null => {
  switch (action.type) {
    case AuthActionType.CONNECT:
      if (!action.credential)
        throw new TypeError('Credential are necessary to connect an user.');
      return action.credential;

    case AuthActionType.DISCONNECT:
      return null;

    case AuthActionType.EDIT:
      if (!action.credential)
        throw new TypeError('Credential are necessary to update user profile.');
      return action.credential;

    default:
      return null;
  }
};

export const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(dispatcher, null);

  return (
    <AUTH_CONTEXT.Provider value={state}>
      <AUTH_CONTEXT_DISPATCHER.Provider value={dispatch}>
        {children}
      </AUTH_CONTEXT_DISPATCHER.Provider>
    </AUTH_CONTEXT.Provider>
  );
};
