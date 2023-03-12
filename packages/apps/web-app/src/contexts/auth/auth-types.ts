import { Credential } from '../../repository/auth/repository';

export interface AuthContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export enum AuthActionType {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  EDIT = 'edit',
}

export interface Action {
  type: AuthActionType;
  credential?: Credential;
}
