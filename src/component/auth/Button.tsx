import { memo } from 'react';
import styled from 'styled-components';

const Button = styled.button(({ theme }) => ({
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

export default memo(Button);
