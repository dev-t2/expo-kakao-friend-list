import { memo } from 'react';
import styled from 'styled-components';

const BoldText = styled.span({
  fontWeight: 600,
});

export default memo(BoldText);
