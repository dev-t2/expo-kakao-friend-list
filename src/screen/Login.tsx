import { useState } from 'react';
import { memo, useCallback } from 'react';
import styled from 'styled-components';

import { isDarkModeVar } from '../apollo';

const StyledContainer = styled.div({});

interface IStyledTitle {
  state: boolean;
}

const StyledTitle = styled.h1<IStyledTitle>(({ theme, state }) => ({
  color: theme.fontColor,
  backgroundColor: theme.bgColor,
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

  const onClick = useCallback(
    (isDark: boolean) => () => {
      isDarkModeVar(isDark);
    },
    []
  );

  return (
    <StyledContainer>
      <StyledTitle state={state}>Login</StyledTitle>
      <StyledButton onClick={onToggle}>Toggle</StyledButton>
      <button onClick={onClick(true)}>Dark</button>
      <button onClick={onClick(false)}>Light</button>
    </StyledContainer>
  );
};

export default memo(Login);
