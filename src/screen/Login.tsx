import { useState } from 'react';
import { memo, useCallback } from 'react';
import styled from 'styled-components';

import { isLoggedInVar } from '../apollo';

const StyledContainer = styled.div({
  backgroundColor: 'tomato',
});

interface IStyledTitle {
  state: Boolean;
}

const StyledTitle = styled.h1<IStyledTitle>(({ state }) => ({
  color: state ? 'palevioletred' : 'beige',
  fontFamily: 'sans-serif',
}));

const StyledButton = styled.button({
  color: 'red',
});

const Login = () => {
  const [state, setState] = useState(false);

  const onToggle = useCallback(() => {
    setState(prev => !prev);
  }, []);

  const onClick = useCallback(() => {
    isLoggedInVar(true);
  }, []);

  return (
    <StyledContainer>
      <StyledTitle state={state}>Login</StyledTitle>
      <StyledButton onClick={onToggle}>Toggle</StyledButton>
      <button onClick={onClick}>Login</button>
    </StyledContainer>
  );
};

export default memo(Login);
