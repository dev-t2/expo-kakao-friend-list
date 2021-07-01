import { memo, useCallback } from 'react';
import styled from 'styled-components';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';

import { PHOTO_FRAGMENT } from '../fragment';
import { getProfile, getProfileVariables } from '../__generated__/getProfile';
import { follow, followVariables } from '../__generated__/follow';
import { unfollow, unfollowVariables } from '../__generated__/unfollow';
import { BoldText, PageTitle } from '../component/common';

const Header = styled.div({
  display: 'flex',
});

const Avatar = styled.img(({ theme }) => ({
  width: 160,
  height: 160,
  borderRadius: '50%',
  marginLeft: 50,
  marginRight: 150,
  backgroundColor: theme.background,
}));

const Row = styled.div({
  display: 'flex',
  alignItems: 'center',
  fontSize: 16,
  marginBottom: 20,
});

const Nickname = styled.h3({
  fontSize: 28,
  fontWeight: 400,
});

const ProfileButton = styled.span(({ theme }) => ({
  backgroundColor: theme.primary,
  color: 'white',
  textAlign: 'center',
  fontWeight: 600,
  border: 'none',
  borderRadius: 4,
  padding: 8,
  cursor: 'pointer',
  marginLeft: 10,
}));

const List = styled.ul({
  display: 'flex',
});

const Item = styled.li({
  marginRight: 20,
});

const Value = styled(BoldText)({
  fontSize: 18,
});

const Name = styled(BoldText)({
  fontSize: 20,
});

const Grid = styled.div({
  display: 'grid',
  gridAutoRows: 290,
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 30,
  marginTop: 50,
});

interface IPhoto {
  backgroundImage?: string;
}

const Photo = styled.div<IPhoto>(({ backgroundImage }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  position: 'relative',
}));

const Icons = styled.div({
  width: '100%',
  height: '100%',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  opacity: 0,

  '&:hover': {
    opacity: 1,
  },
});

const Icon = styled.span({
  fontSize: 18,
  display: 'flex',
  alignItems: 'center',
  margin: '0 5px',

  svg: {
    fontSize: 14,
    marginRight: 5,
  },
});

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

const FOLLOW_MUTATION = gql`
  mutation follow($nickname: String!) {
    follow(nickname: $nickname) {
      isSuccess
      error
    }
  }
`;

const UNFOLLOW_MUTATION = gql`
  mutation unfollow($nickname: String!) {
    unfollow(nickname: $nickname) {
      isSuccess
      error
    }
  }
`;

interface IParams {
  nickname: string;
}

const Profile = () => {
  const { nickname } = useParams<IParams>();

  const { data, loading } = useQuery<getProfile, getProfileVariables>(
    GET_PROFILE_QUERY,
    { variables: { nickname } }
  );

  const [follow] = useMutation<follow, followVariables>(FOLLOW_MUTATION, {
    variables: { nickname },
  });

  const [unfollow] = useMutation<unfollow, unfollowVariables>(
    UNFOLLOW_MUTATION,
    { variables: { nickname } }
  );

  const onFollow = useCallback(() => {
    follow();
  }, [follow]);

  const onUnfollow = useCallback(() => {
    unfollow();
  }, [unfollow]);

  const getButton = useCallback(
    getProfile => {
      const { isMe, isFollowing } = getProfile;

      if (isMe) {
        return <ProfileButton>Edit Profile</ProfileButton>;
      }

      if (isFollowing) {
        return <ProfileButton onClick={onUnfollow}>Unfollow</ProfileButton>;
      }

      return <ProfileButton onClick={onFollow}>Follow</ProfileButton>;
    },
    [onUnfollow, onFollow]
  );

  return (
    <div>
      <PageTitle
        title={
          loading ? '로딩 중...' : `${data?.getProfile?.nickname} 님의 프로필`
        }
      />

      <Header>
        <Avatar src={data?.getProfile?.avatar ?? ''} />

        <div>
          <Row>
            <Nickname>{data?.getProfile?.nickname}</Nickname>
            {data?.getProfile && getButton(data?.getProfile)}
          </Row>

          <Row>
            <List>
              <Item>
                <span>
                  <Value>{data?.getProfile?.totalFollower}</Value> 팔로워
                </span>
              </Item>

              <Item>
                <span>
                  <Value>{data?.getProfile?.totalFollowing}</Value> 팔로잉
                </span>
              </Item>
            </List>
          </Row>

          <Row>
            <Name>{data?.getProfile?.name}</Name>
          </Row>

          <Row>{data?.getProfile?.aboutMe}</Row>
        </div>
      </Header>

      <Grid>
        {data?.getProfile?.photos?.map(photo => (
          <Photo key={photo?.id} backgroundImage={photo?.photoUrl}>
            <Icons>
              <Icon>
                <FontAwesomeIcon icon={faHeart} />
                {photo?.numberOfLikes}
              </Icon>

              <Icon>
                <FontAwesomeIcon icon={faComment} />
                {photo?.numberOfComments}
              </Icon>
            </Icons>
          </Photo>
        ))}
      </Grid>
    </div>
  );
};

export default memo(Profile);
