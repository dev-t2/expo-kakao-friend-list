import { memo } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { PHOTO_FRAGMENT } from '../fragment';
import { getProfile, getProfileVariables } from '../__generated__/getProfile';

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
  const { data } = useQuery<getProfile, getProfileVariables>(
    GET_PROFILE_QUERY,
    { variables: { nickname } }
  );

  console.log(data);

  return <div></div>;
};

export default memo(Profile);
