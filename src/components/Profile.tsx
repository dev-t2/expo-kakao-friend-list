import { FC, memo, useMemo } from 'react';
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

const Avatar = styled.Image({
  width: 50,
  height: 50,
  borderRadius: 20,
});

const StyledView = styled.View({
  marginLeft: 10,
});

const Name = styled.Text({
  fontSize: 16,
  fontWeight: 'bold',
});

const Introduction = styled.Text(({ theme }) => ({
  fontSize: 12,
  color: theme.colors.gray[500],
  marginTop: 8,
}));

interface IProfile extends IProfileData {
  marginTop?: number;
}

const Profile: FC<IProfile> = ({ marginTop, avatar, name, introduction }) => {
  const source = useMemo(() => ({ uri: avatar }), [avatar]);

  return (
    <Container marginTop={marginTop}>
      <Avatar source={source} />

      <StyledView>
        <Name>{name}</Name>

        <Introduction>{introduction}</Introduction>
      </StyledView>
    </Container>
  );
};

export default memo(Profile);
