import { memo } from 'react';
import styled from '@emotion/native';

import IconButton from './IconButton';

const Container = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 10,
});

const Title = styled.Text({
  fontSize: 24,
  fontWeight: 'bold',
});

const IconContainer = styled.View({
  flexDirection: 'row',
});

const Header = () => {
  return (
    <Container>
      <Title>친구</Title>

      <IconContainer>
        <IconButton name="search-outline" />
        <IconButton name="person-add-outline" />
        <IconButton name="musical-note-outline" />
        <IconButton name="settings-outline" />
      </IconContainer>
    </Container>
  );
};

export default memo(Header);
