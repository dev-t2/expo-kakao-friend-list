import { FC, memo } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input(({ theme }) => ({
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

interface IInput {
  type: string;
  placeholder: string;
}

const Input: FC<IInput> = ({ type, placeholder }) => {
  return <StyledInput type={type} placeholder={placeholder} />;
};

export default memo(Input);
