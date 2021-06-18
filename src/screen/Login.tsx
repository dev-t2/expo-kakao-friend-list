import { useCallback } from 'react';
import { FC } from 'react';
import { memo } from 'react';

interface ILogin {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: FC<ILogin> = ({ setIsLoggedIn }) => {
  const onClick = useCallback(() => {
    setIsLoggedIn(true);
  }, [setIsLoggedIn]);

  return (
    <>
      <h1>Login</h1>
      <button onClick={onClick}>Login</button>
    </>
  );
};

export default memo(Login);
