import { memo } from 'react';
import styled from 'styled-components';

interface IButton {
  disabled: boolean;
}

const Button = styled.button<IButton>(({ theme, disabled }) => ({
  width: '100%',
  backgroundColor: theme.primary,
  color: 'white',
  textAlign: 'center',
  fontWeight: 600,
  border: 'none',
  borderRadius: 4,
  padding: 8,
  opacity: disabled ? 0.4 : 1,
  cursor: 'pointer',
}));

export default memo(Button);
