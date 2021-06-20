import styled from 'styled-components';

export const Box = styled.div(({ theme }) => ({
  backgroundColor: 'white',
  border: `1px solid ${theme.borderColor}`,
}));

export const BoldLink = styled.span({
  fontWeight: 600,
  color: '#8e8e8e',
});
