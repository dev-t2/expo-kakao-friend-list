import { memo } from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getFeeds } from '../__generated__/getFeeds';
import { Avatar, BoldText } from '../component/common';
import {
  faComment,
  faHeart,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';

const PhotoContainer = styled.div(({ theme }) => ({
  maxWidth: 615,
  backgroundColor: theme.surface,
  border: `1px solid ${theme.border}`,
  borderRadius: 4,
  marginBottom: 60,
}));

const PhotoHeader = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: 15,
  borderBottom: `1px solid ${theme.border}`,
}));

const Nickname = styled(BoldText)({
  marginLeft: 15,
});

const PhotoContents = styled.img({
  minWidth: '100%',
  maxWidth: '100%',
});

const PhotoData = styled.div({
  padding: '12px 15px',
});

const PhotoActions = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const PhotoAction = styled.div({
  cursor: 'pointer',
  marginRight: 15,

  svg: {
    fontSize: 20,
  },
});

const Like = styled(BoldText)({
  display: 'block',
  marginTop: 15,
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
      isLiked
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

          <PhotoContents src={feed?.photoUrl} alt={`Feed ${feed?.id}`} />

          <PhotoData>
            <PhotoActions>
              <PhotoAction>
                <FontAwesomeIcon icon={faHeart} />
              </PhotoAction>
              <PhotoAction>
                <FontAwesomeIcon icon={faComment} />
              </PhotoAction>
              <PhotoAction>
                <FontAwesomeIcon icon={faPaperPlane} />
              </PhotoAction>
            </PhotoActions>

            <Like>좋아요 {feed?.like} 개</Like>
          </PhotoData>
        </PhotoContainer>
      ))}
    </div>
  );
};

export default memo(Home);
