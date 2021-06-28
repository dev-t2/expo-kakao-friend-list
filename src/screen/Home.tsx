import { memo } from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { getFeeds } from '../__generated__/getFeeds';
import { Avatar, BoldText } from '../component/common';

const PhotoContainer = styled.div(({ theme }) => ({
  maxWidth: 615,
  backgroundColor: theme.surface,
  border: `1px solid ${theme.border}`,
  marginBottom: 20,
}));

const PhotoHeader = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: 15,
});

const Nickname = styled(BoldText)({
  marginLeft: 15,
});

const PhotoBody = styled.img({
  minWidth: '100%',
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
            <Avatar avatar={feed?.user.avatar} isLarge />
            <Nickname>{feed?.user.nickname}</Nickname>
          </PhotoHeader>

          <PhotoBody src={feed?.photoUrl} alt={`Feed ${feed?.id}`} />
        </PhotoContainer>
      ))}
    </div>
  );
};

export default memo(Home);
