import { FC, memo } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

const Container = styled.Pressable({
  paddingHorizontal: 4,
});

interface IIconButton {
  name: 'search-outline' | 'person-add-outline' | 'musical-note-outline' | 'settings-outline';
}

const IconButton: FC<IIconButton> = ({ name }) => {
  const theme = useTheme();

  return (
    <Container>
      <Ionicons name={name} size={24} color={theme.colors.black} />
    </Container>
  );
};

export default memo(IconButton);
