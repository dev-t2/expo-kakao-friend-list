import { FC, memo, ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';

const StyledMain = styled.main({
  margin: '0 auto',
  marginTop: '45px',
  maxWidth: '930px',
  width: '100%',
});

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default memo(Layout);
