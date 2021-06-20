import { memo } from 'react';
import styled from 'styled-components';

const Box = styled.div(({ theme }) => ({
  backgroundColor: 'white',
  border: `1px solid ${theme.borderColor}`,
}));

export default memo(Box);
