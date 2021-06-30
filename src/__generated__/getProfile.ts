/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProfile
// ====================================================

export interface getProfile_getProfile_photos {
  __typename: "Photo";
  id: number;
  photoUrl: string;
  numberOfLikes: number;
  numberOfComments: number;
  isLiked: boolean;
}

export interface getProfile_getProfile {
  __typename: "User";
  id: number;
  name: string;
  nickname: string;
  aboutMe: string | null;
  avatar: string | null;
  totalFollower: number;
  totalFollowing: number;
  isMe: boolean;
  isFollowing: boolean;
  photos: (getProfile_getProfile_photos | null)[] | null;
}

export interface getProfile {
  getProfile: getProfile_getProfile | null;
}

export interface getProfileVariables {
  nickname: string;
}
