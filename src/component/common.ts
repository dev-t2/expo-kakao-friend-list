import styled from 'styled-components';

export const Box = styled.div(({ theme }) => ({
  backgroundColor: 'white',
  border: `1px solid ${theme.borderColor}`,
}));
