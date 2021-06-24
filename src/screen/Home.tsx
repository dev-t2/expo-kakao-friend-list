import { memo } from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { getFeeds } from '../__generated__/getFeeds';
import { Avatar, BoldText } from '../component/common';

const PhotoContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.surface,
  border: `1px solid ${theme.border}`,
  marginBottom: '20px',
}));

const PhotoHeader = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: '5px 10px',
});

const Nickname = styled(BoldText)({
  marginLeft: '5px',
});

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
      createdAt
    }
  }
`;

const Home = () => {
  const { data } = useQuery<getFeeds>(GET_FEEDS_QUERY);

  return (
    <div>
      {data?.getFeeds?.map(feed => (
        <PhotoContainer key={feed?.id}>
          <PhotoHeader>
            <Avatar avatar={feed?.user.avatar} />
            <Nickname>{feed?.user.nickname}</Nickname>
          </PhotoHeader>
        </PhotoContainer>
      ))}
    </div>
  );
};

export default memo(Home);
