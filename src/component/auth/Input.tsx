import { memo } from 'react';
import styled from 'styled-components';

interface IInput {
  isError: boolean;
}

const Input = styled.input<IInput>(({ theme, isError }) => ({
  boxSizing: 'border-box',
  width: '100%',
  padding: '8px 16px',
  backgroundColor: theme.background,
  border: `0.5px solid ${isError ? theme.error : theme.border}`,
  borderRadius: '4px',
  marginBottom: '5px',

  '&::placeholder': {
    fontSize: 12,
    color: theme.onSurface,
  },

  '&:focus': {
    borderColor: theme.focus,
  },
}));

export default memo(Input);
