import { useContext } from 'react';
import { AuthContext } from './AuthContext';

interface IUseAuthResult {
  isAuth: boolean;
  toggleAuth: () => void;
}

export function useAuth(): IUseAuthResult {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };

  return {
    isAuth,
    toggleAuth,
  };
}
