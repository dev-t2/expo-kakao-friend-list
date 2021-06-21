import { memo, useCallback } from 'react';

import { removeToken } from '../apollo';

const Home = () => {
  const onClick = useCallback(() => {
    removeToken();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <button onClick={onClick}>Logout</button>
    </>
  );
};

export default memo(Home);
