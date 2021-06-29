import { FC, memo } from 'react';
import styled from 'styled-components';
import sanitizeHtml from 'sanitize-html';

import { BoldText } from '../common';

const Container = styled.div({});

const Caption = styled.span(({ theme }) => ({
  marginLeft: 10,

  mark: {
    backgroundColor: 'inherit',
    color: theme.primary,
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

interface IComment {
  name?: string;
  contents?: string | null;
}

const Comment: FC<IComment> = ({ name, contents }) => {
  const sanitizedContents = sanitizeHtml(
    contents?.replace(/#[\w]+/g, '<mark>$&</mark>') ?? '',
    { allowedTags: ['mark'] }
  );

  return (
    <Container>
      <BoldText>{name}</BoldText>

      {sanitizedContents && (
        <Caption
          dangerouslySetInnerHTML={{
            __html: sanitizedContents,
          }}
        />
      )}
    </Container>
  );
};

export default memo(Comment);
