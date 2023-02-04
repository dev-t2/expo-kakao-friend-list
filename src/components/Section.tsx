import { FC, memo, useMemo } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

interface IContainer {
  marginTop?: number;
}

const Container = styled.View<IContainer>(({ marginTop }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop,
}));

const Title = styled.Text(({ theme }) => ({
  color: theme.colors.gray[500],
}));

const IconButton = styled.Pressable({});

interface ISection {
  marginTop?: number;
  length: number;
  isOpened: boolean;
  onPress: () => void;
}

const Section: FC<ISection> = ({ marginTop, length, isOpened, onPress }) => {
  const theme = useTheme();

  const name = useMemo(() => (isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'), [isOpened]);

  return (
    <Container marginTop={marginTop}>
      <Title>친구 {length}</Title>

      <IconButton onPress={onPress}>
        <MaterialIcons name={name} size={24} color={theme.colors.gray[300]} />
      </IconButton>
    </Container>
  );
};

export default memo(Section);
