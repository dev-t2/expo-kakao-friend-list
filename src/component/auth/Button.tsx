import { memo } from 'react';
import styled from 'styled-components';

interface IButton {
  disabled: boolean;
}

const Button = styled.button<IButton>(({ theme, disabled }) => ({
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
  opacity: disabled ? 0.4 : 1,
  cursor: 'pointer',
}));

export default memo(Button);
