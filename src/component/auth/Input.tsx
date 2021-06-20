import { memo } from 'react';
import styled from 'styled-components';

interface IInput {
  isError: boolean;
}

const Input = styled.input<IInput>(({ theme, isError }) => ({
  boxSizing: 'border-box',
  width: '100%',
  padding: '8px',
  backgroundColor: '#fafafa',
  border: `0.5px solid ${isError ? 'tomato' : theme.borderColor}`,
  borderRadius: '4px',
  marginBottom: '5px',

  '&::placeholder': {
    fontSize: 12,
    color: isError ? 'tomato' : 'inherit',
  },

  '&:focus': {
    borderColor: '#262626',
  },
}));

export default memo(Input);
