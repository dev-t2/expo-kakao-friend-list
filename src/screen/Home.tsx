import { memo, useCallback } from 'react';

import { isLoggedInVar } from '../apollo';

const Home = () => {
  const onClick = useCallback(() => {
    isLoggedInVar(false);
  }, []);

  return (
    <>
      <h1>Home</h1>
      <button onClick={onClick}>Logout</button>
    </>
  );
};

export default memo(Home);
