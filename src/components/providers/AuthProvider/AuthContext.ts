import { createContext } from 'react';

export interface IAuthContextProps {
  isAuth?: boolean;
  setIsAuth?: (isAuth: boolean) => void;
}

export const AuthContext = createContext<IAuthContextProps>({});
