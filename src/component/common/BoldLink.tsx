import { memo } from 'react';
import styled from 'styled-components';

const BoldLink = styled.span({
  fontWeight: 600,
  color: '#8e8e8e',
});

export default memo(BoldLink);
