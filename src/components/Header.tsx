import { memo, useMemo } from 'react';
import { Insets } from 'react-native';
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

const IconButton = styled.TouchableOpacity({
  paddingHorizontal: 5,
});

const Header = () => {
  const theme = useTheme();

  const hitSlop = useMemo<Insets>(() => ({ top: 10, bottom: 10 }), []);

  return (
    <Container>
      <Title>친구</Title>

      <IconContainer>
        <IconButton hitSlop={hitSlop}>
          <Ionicons name="search-outline" size={18} color={theme.colors.black} />
        </IconButton>

        <IconButton hitSlop={{ top: 10, bottom: 10 }}>
          <Ionicons name="person-add-outline" size={18} color={theme.colors.black} />
        </IconButton>

        <IconButton hitSlop={{ top: 10, bottom: 10 }}>
          <Ionicons name="musical-notes-outline" size={18} color={theme.colors.black} />
        </IconButton>

        <IconButton hitSlop={{ top: 10, bottom: 10 }}>
          <Ionicons name="settings-outline" size={18} color={theme.colors.black} />
        </IconButton>
      </IconContainer>
    </Container>
  );
};

export default memo(Header);
