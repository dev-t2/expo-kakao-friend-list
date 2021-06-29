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
      {contents && (
        <Caption
          dangerouslySetInnerHTML={{
            __html: contents.replace(/#[\w]+/g, '<mark>$&</mark>'),
          }}
        />
      )}
    </Container>
  );
};

export default memo(Comment);
