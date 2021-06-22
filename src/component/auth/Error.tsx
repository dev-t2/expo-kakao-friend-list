import { FC, memo } from 'react';
import styled from 'styled-components';

const StyledError = styled.span(({ theme }) => ({
  color: theme.error,
  fontSize: 12,
  margin: '5px 0px 10px 0px',
}));

interface IError {
  message?: string;
}

const Error: FC<IError> = ({ message }) => {
  return message ? <StyledError>{message}</StyledError> : null;
};

export default memo(Error);
