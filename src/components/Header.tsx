import { memo } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

const Container = styled.View(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderBottomWidth: 1,
  borderBottomColor: theme.colors.gray[300],
}));

const Title = styled.Text({
  fontSize: 24,
  fontWeight: 'bold',
});

const IconContainer = styled.View({
  flexDirection: 'row',
});

const IconButton = styled.Pressable({
  paddingHorizontal: 4,
});

const Header = () => {
  const theme = useTheme();

  return (
    <Container>
      <Title>친구</Title>

      <IconContainer>
        <IconButton>
          <Ionicons name="search-outline" size={20} color={theme.colors.black} />
        </IconButton>

        <IconButton>
          <Ionicons name="person-add-outline" size={20} color={theme.colors.black} />
        </IconButton>

        <IconButton>
          <Ionicons name="musical-note-outline" size={20} color={theme.colors.black} />
        </IconButton>

        <IconButton>
          <Ionicons name="settings-outline" size={20} color={theme.colors.black} />
        </IconButton>
      </IconContainer>
    </Container>
  );
};

export default memo(Header);
