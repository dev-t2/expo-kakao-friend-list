import { memo, useCallback } from 'react';

import { isLoggedInVar } from '../apollo';

const Login = () => {
  const onClick = useCallback(() => {
    isLoggedInVar(true);
  }, []);

  return (
    <>
      <h1>Login</h1>
      <button onClick={onClick}>Login</button>
    </>
  );
};

export default memo(Login);
