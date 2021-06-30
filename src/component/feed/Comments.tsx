import { FC, memo, useCallback } from 'react';
import styled from 'styled-components';
import { gql, useMutation } from '@apollo/client';
import { SubmitHandler, useForm } from 'react-hook-form';

import { getFeeds_getFeeds_comments as IComment } from '../../__generated__/getFeeds';
import {
  createComment,
  createCommentVariables,
} from '../../__generated__/createComment';
import Comment from './Comment';

const Container = styled.div({
  marginTop: 20,
});

const CommentCount = styled.div({
  opacity: 0.6,
  fontSize: 12,
  fontWeight: 600,
  marginTop: 20,
  marginBottom: 10,
});

const FormContainer = styled.div(({ theme }) => ({
  borderTop: `1px solid ${theme.border}`,
  marginTop: 20,
  paddingTop: 10,
}));

const Input = styled.input({
  width: '100%',

  '&::placeholder': {
    fontSize: 12,
  },
});

const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($photoId: Int!, $comment: String!) {
    createComment(photoId: $photoId, comment: $comment) {
      isSuccess
      createdComment {
        id
        user {
          nickname
          avatar
        }
        comment
        isMine
        createdAt
      }
      error
    }
  }
`;

interface IComments {
  photoId: number;
  author: string;
  caption: string | null;
  numberOfComments: number;
  comments: (IComment | null)[] | null;
}

interface IForm {
  comment: string;
  server: string;
}

const Comments: FC<IComments> = ({
  photoId,
  author,
  caption,
  numberOfComments,
  comments,
}) => {
  const [createCommentMutation, { loading }] = useMutation<
    createComment,
    createCommentVariables
  >(CREATE_COMMENT_MUTATION, {
    update: (cache, { data }) => {
      if (
        data?.createComment.isSuccess &&
        data.createComment.createdComment?.isMine
      ) {
        const { createdComment } = data.createComment;

        cache.modify({
          id: `Photo:${photoId}`,
          fields: {
            comments(prev) {
              return [...prev, createdComment];
            },
            numberOfComments(prev) {
              return prev + 1;
            },
          },
        });
      }
    },
  });

  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onValid: SubmitHandler<IForm> = useCallback(
    ({ comment }) => {
      if (loading) return;

      createCommentMutation({ variables: { photoId, comment } });
      setValue('comment', '');
    },
    [loading, createCommentMutation, photoId, setValue]
  );

  return (
    <Container>
      <Comment photoId={photoId} name={author} contents={caption} />

      <CommentCount>댓글 {numberOfComments} 개</CommentCount>

      {comments?.map(comment => {
        return comment ? (
          <Comment
            key={comment.id}
            photoId={photoId}
            id={comment.id}
            name={comment.user.nickname}
            contents={comment.comment}
            isMine={comment.isMine}
          />
        ) : null;
      })}

      <FormContainer>
        <form onSubmit={handleSubmit(onValid)}>
          <Input
            type="text"
            {...register('comment', { required: true })}
            placeholder="댓글을 작성해주세요."
          />
        </form>
      </FormContainer>
    </Container>
  );
};

export default memo(Comments);
