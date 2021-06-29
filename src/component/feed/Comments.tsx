import { FC, memo } from 'react';
import styled from 'styled-components';

import { getFeeds_getFeeds_comments } from '../../__generated__/getFeeds';
import { BoldText } from '../common';

const Container = styled.div({
  marginTop: 20,
});

const Comment = styled.div({});

const Caption = styled.span({
  marginLeft: 10,
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
      <Comment>
        <BoldText>{author}</BoldText>
        <Caption>{caption}</Caption>
      </Comment>

      <CommentCount>댓글 {numberOfComments} 개</CommentCount>

      {comments?.map(comment => (
        <Comment key={comment?.id}>
          <BoldText>{comment?.user.nickname}</BoldText>
          <Caption>{comment?.comment}</Caption>
        </Comment>
      ))}
    </Container>
  );
};

export default memo(Comments);
