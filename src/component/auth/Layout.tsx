import { FC, ReactNode } from 'react';
import { memo } from 'react';
import styled from 'styled-components';

const Container = styled.div({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Wrapper = styled.div({
  maxWidth: '350px',
  width: '100%',
});

interface IAuthLayout {
  children: ReactNode;
}

const AuthLayout: FC<IAuthLayout> = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default memo(AuthLayout);
