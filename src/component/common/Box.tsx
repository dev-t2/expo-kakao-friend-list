import { memo } from 'react';
import styled from 'styled-components';

const Box = styled.div(({ theme }) => ({
  backgroundColor: theme.surface,
  border: `1px solid ${theme.border}`,
}));

export default memo(Box);
