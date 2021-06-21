import { memo } from 'react';
import styled from 'styled-components';

const Box = styled.div(({ theme }) => ({
  backgroundColor: theme.backgroundColor,
  border: `1px solid ${theme.borderColor}`,
}));

export default memo(Box);
