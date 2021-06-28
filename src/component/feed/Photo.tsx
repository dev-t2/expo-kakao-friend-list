import { FC, memo, useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faHeart,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidFaHeart } from '@fortawesome/free-solid-svg-icons';
import { gql, useMutation } from '@apollo/client';

import {
  toggleLike,
  toggleLikeVariables,
} from '../../__generated__/toggleLike';
import { Avatar, BoldText } from '../common';

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
  padding: '10px 15px',
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

interface IPhoto {
  id: number;
  user: {
    nickname: string;
    avatar: string | null;
  };
  photoUrl: string;
  like: number;
  isLiked: boolean;
}

const TOGGLE_LIKE_MUTATION = gql`
  mutation toggleLike($id: Int!) {
    toggleLike(id: $id) {
      isSuccess
      error
    }
  }
`;

const Photo: FC<IPhoto> = ({ id, user, photoUrl, like, isLiked }) => {
  const [toggleLikeMutation] = useMutation<toggleLike, toggleLikeVariables>(
    TOGGLE_LIKE_MUTATION,
    {
      variables: { id },
      update: (cache, { data }) => {
        if (data?.toggleLike?.isSuccess) {
          cache.writeFragment({
            id: `Photo:${id}`,
            fragment: gql`
              fragment Photo on Photo {
                isLiked
                like
              }
            `,
            data: {
              isLiked: !isLiked,
              like: isLiked ? like - 1 : like + 1,
            },
          });
        }
      },
    }
  );

  const onClickLike = useCallback(() => {
    toggleLikeMutation();
  }, [toggleLikeMutation]);

  return (
    <PhotoContainer>
      <PhotoHeader>
        <Avatar avatar={user.avatar} isLarge />
        <Nickname>{user.nickname}</Nickname>
      </PhotoHeader>

      <PhotoContents src={photoUrl} alt={`Feed ${id}`} />

      <PhotoData>
        <PhotoActions>
          <PhotoAction onClick={onClickLike}>
            <FontAwesomeIcon
              style={{ color: isLiked ? 'tomato' : 'inherit' }}
              icon={isLiked ? solidFaHeart : faHeart}
            />
          </PhotoAction>
          <PhotoAction>
            <FontAwesomeIcon icon={faComment} />
          </PhotoAction>
          <PhotoAction>
            <FontAwesomeIcon icon={faPaperPlane} />
          </PhotoAction>
        </PhotoActions>

        <Like>좋아요 {like} 개</Like>
      </PhotoData>
    </PhotoContainer>
  );
};

export default memo(Photo);
