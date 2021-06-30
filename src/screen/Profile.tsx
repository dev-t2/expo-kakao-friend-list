import { memo } from 'react';
import { gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PHOTO_FRAGMENT } from '../fragment';

const GET_PROFILE_QUERY = gql`
  query getProfile($nickname: String!) {
    getProfile(nickname: $nickname) {
      id
      name
      nickname
      aboutMe
      avatar
      totalFollower
      totalFollowing
      isMe
      isFollowing
      photos {
        ...PhotoFragment
      }
    }
  }

  ${PHOTO_FRAGMENT}
`;

interface IParams {
  nickname: string;
}

const Profile = () => {
  const { nickname } = useParams<IParams>();

  console.log(nickname);

  return <div></div>;
};

export default memo(Profile);
