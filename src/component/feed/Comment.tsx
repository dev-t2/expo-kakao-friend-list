import { FC, memo } from 'react';
import styled from 'styled-components';

import { BoldText } from '../common';

const Container = styled.div({});

const Caption = styled.span({
  marginLeft: 10,
});

interface IComment {
  name?: string;
  contents?: string | null;
}

const Comment: FC<IComment> = ({ name, contents }) => {
  return (
    <Container>
      <BoldText>{name}</BoldText>
      <Caption>{contents}</Caption>
    </Container>
  );
};

export default memo(Comment);
