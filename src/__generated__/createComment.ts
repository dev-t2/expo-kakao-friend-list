/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createComment
// ====================================================

export interface createComment_createComment_createdComment_user {
  __typename: "User";
  nickname: string;
  avatar: string | null;
}

export interface createComment_createComment_createdComment {
  __typename: "Comment";
  id: number;
  user: createComment_createComment_createdComment_user;
  comment: string;
  isMine: boolean;
  createdAt: string;
}

export interface createComment_createComment {
  __typename: "CreateCommentResult";
  isSuccess: boolean;
  createdComment: createComment_createComment_createdComment | null;
  error: string | null;
}

export interface createComment {
  createComment: createComment_createComment;
}

export interface createCommentVariables {
  photoId: number;
  comment: string;
}
