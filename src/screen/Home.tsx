import { FC, memo, useCallback } from 'react';

interface IHome {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: FC<IHome> = ({ setIsLoggedIn }) => {
  const onClick = useCallback(() => {
    setIsLoggedIn(false);
  }, [setIsLoggedIn]);

  return (
    <>
      <h1>Home</h1>
      <button onClick={onClick}>Logout</button>
    </>
  );
};

export default memo(Home);
