import { gql } from '@apollo/client';

export const PHOTO_FRAGMENT = gql`
  fragment PhotoFragment on Photo {
    id
    photoUrl
    numberOfLikes
    numberOfComments
    isLiked
  }
`;

export const COMMENT_FRAGMENT = gql`
  fragment CommentFragment on Comment {
    id
    user {
      nickname
      avatar
    }
    comment
    isMine
    createdAt
  }
`;
