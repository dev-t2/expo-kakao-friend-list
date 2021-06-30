import { FC, Fragment, memo, useCallback } from 'react';
import styled from 'styled-components';
import { gql, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import {
  deleteComment,
  deleteCommentVariables,
} from '../../__generated__/deleteComment';
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

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($id: Int!) {
    deleteComment(id: $id) {
      isSuccess
      error
    }
  }
`;

interface IComment {
  photoId: number;
  id?: number;
  name: string;
  contents: string | null;
  isMine?: boolean;
}

const Comment: FC<IComment> = ({ photoId, id = 0, name, contents, isMine }) => {
  const [deleteCommentMutation] = useMutation<
    deleteComment,
    deleteCommentVariables
  >(DELETE_COMMENT_MUTATION, {
    variables: { id },
    update: (cache, { data }) => {
      if (data?.deleteComment.isSuccess) {
        cache.evict({ id: `Comment:${id}` });

        cache.modify({
          id: `Photo:${photoId}`,
          fields: {
            numberOfComments(prev) {
              return prev - 1;
            },
            comments() {},
          },
        });
      }
    },
  });

  const onClick = useCallback(() => {
    deleteCommentMutation();
  }, [deleteCommentMutation]);

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

      {isMine && <button onClick={onClick}>❌</button>}
    </Container>
  );
};

export default memo(Comment);
