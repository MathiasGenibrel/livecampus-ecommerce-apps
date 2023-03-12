import { LocalAuthRepository } from '../repository/auth/local-auth-repository';

const repository = new LocalAuthRepository();

export const useAuthRepository = () => {
  return repository;
};
