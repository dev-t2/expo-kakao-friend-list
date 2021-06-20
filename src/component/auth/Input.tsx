import { memo } from 'react';
import styled from 'styled-components';

const Input = styled.input(({ theme }) => ({
  boxSizing: 'border-box',
  width: '100%',
  padding: '8px',
  backgroundColor: '#fafafa',
  border: `0.5px solid ${theme.borderColor}`,
  borderRadius: '4px',
  marginBottom: '5px',

  '&::placeholder': {
    fontSize: '12px',
  },
}));

export default memo(Input);
