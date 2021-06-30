import { FC, Fragment, memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BoldText } from '../common';

const Container = styled.div({
  marginBottom: 10,
});

const Caption = styled.span(({ theme }) => ({
  marginLeft: 10,

  a: {
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
  return (
    <Container>
      <BoldText>{name}</BoldText>

      <Caption>
        {contents?.split(' ').map((content, index) =>
          /#[\w]+/g.test(content) ? (
            <Fragment key={index}>
              <Link to={`/hashtags/${content}`}>{content}</Link>{' '}
            </Fragment>
          ) : (
            <Fragment key={index}>{content} </Fragment>
          )
        )}
      </Caption>
    </Container>
  );
};

export default memo(Comment);
