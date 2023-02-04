import { FC, memo } from 'react';
import styled from '@emotion/native';

import { IProfileData } from '../data';

interface IContainer {
  marginTop?: number;
}

const Container = styled.View<IContainer>(({ marginTop }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginTop,
}));

interface IAvatar {
  isMyProfile?: boolean;
}

const Avatar = styled.Image<IAvatar>(({ isMyProfile }) => {
  const size = isMyProfile ? 50 : 40;

  return {
    width: size,
    height: size,
    borderRadius: size * 0.4,
  };
});

const StyledView = styled.View({
  marginLeft: 10,
});

interface IName {
  isMyProfile?: boolean;
}

const Name = styled.Text<IName>(({ isMyProfile }) => ({
  fontSize: isMyProfile ? 16 : 14,
  fontWeight: isMyProfile ? 'bold' : undefined,
}));

interface IIntroduction {
  isMyProfile?: boolean;
}

const Introduction = styled.Text<IIntroduction>(({ theme, isMyProfile }) => ({
  fontSize: isMyProfile ? 12 : 10,
  color: theme.colors.gray[500],
  marginTop: isMyProfile ? 4 : 2,
}));

interface IProfile extends IProfileData {
  marginTop?: number;
  isMyProfile?: boolean;
}

const Profile: FC<IProfile> = ({ marginTop, isMyProfile, avatar, name, introduction }) => {
  return (
    <Container marginTop={marginTop}>
      <Avatar isMyProfile={isMyProfile} source={{ uri: avatar }} />

      <StyledView>
        <Name isMyProfile={isMyProfile}>{name}</Name>

        {introduction && <Introduction isMyProfile={isMyProfile}>{introduction}</Introduction>}
      </StyledView>
    </Container>
  );
};

export default memo(Profile);
