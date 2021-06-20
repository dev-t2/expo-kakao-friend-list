import { FC, memo, ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button(({ theme }) => ({
  boxSizing: 'border-box',
  width: '100%',
  backgroundColor: theme.accent,
  color: 'white',
  textAlign: 'center',
  fontWeight: 600,
  border: 'none',
  borderRadius: '4px',
  padding: '8px',
  marginTop: '10px',
}));

interface IButton {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
}

const Button: FC<IButton> = ({ children, type }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

export default memo(Button);
