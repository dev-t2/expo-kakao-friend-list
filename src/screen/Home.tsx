import { memo } from 'react';
import { gql, useQuery } from '@apollo/client';

import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from '../fragment';
import { getFeeds } from '../__generated__/getFeeds';
import { PageTitle } from '../component/common';
import { Photo } from '../component/feed';

const GET_FEEDS_QUERY = gql`
  query getFeeds {
    getFeeds {
      ...PhotoFragment
      user {
        nickname
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      isMine
      createdAt
    }
  }

  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

const Home = () => {
  const { data } = useQuery<getFeeds>(GET_FEEDS_QUERY);

  return (
    <div>
      <PageTitle title="Home" />

      {data?.getFeeds?.map(feed => {
        return feed && <Photo key={feed.id} {...feed} />;
      })}
    </div>
  );
};

export default memo(Home);
