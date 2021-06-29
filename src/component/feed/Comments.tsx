import { FC, memo } from 'react';
import styled from 'styled-components';

import { getFeeds_getFeeds_comments } from '../../__generated__/getFeeds';
import Comment from './Comment';

const Container = styled.div({
  marginTop: 20,
});

const CommentCount = styled.div({
  opacity: 0.6,
  fontSize: 12,
  fontWeight: 600,
  marginTop: 10,
});

interface IComments {
  author: string;
  caption: string | null;
  numberOfComments: number;
  comments: (getFeeds_getFeeds_comments | null)[] | null;
}

const Comments: FC<IComments> = ({
  author,
  caption,
  numberOfComments,
  comments,
}) => {
  return (
    <Container>
      <Comment name={author} contents={caption} />

      <CommentCount>댓글 {numberOfComments} 개</CommentCount>

      {comments?.map(comment => (
        <Comment
          key={comment?.id}
          name={comment?.user.nickname}
          contents={comment?.comment}
        />
      ))}
    </Container>
  );
};

export default memo(Comments);
