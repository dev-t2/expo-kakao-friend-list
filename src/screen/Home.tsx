import { memo } from 'react';
import { gql, useQuery } from '@apollo/client';

import { getFeeds } from '../__generated__/getFeeds';
import { Photo } from '../component/feed';

const GET_FEEDS_QUERY = gql`
  query getFeeds {
    getFeeds {
      id
      user {
        nickname
        avatar
      }
      photoUrl
      caption
      like
      comment
      isMine
      isLiked
      createdAt
    }
  }
`;

const Home = () => {
  const { data } = useQuery<getFeeds>(GET_FEEDS_QUERY);

  return (
    <div>
      {data?.getFeeds?.map(feed => {
        return feed && <Photo key={feed.id} {...feed} />;
      })}
    </div>
  );
};

export default memo(Home);
