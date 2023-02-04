import { memo } from 'react';
import styled from '@emotion/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = styled(SafeAreaView)({});

const Title = styled.Text({});

const Header = () => {
  return (
    <Container>
      <Title>친구</Title>
    </Container>
  );
};

export default memo(Header);
