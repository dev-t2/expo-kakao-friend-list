import { FC, memo, useMemo } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';
import { Pressable } from 'react-native';

interface IContainer {
  marginTop?: number;
}

const Container = styled.View<IContainer>(({ marginTop }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop,
}));

const Title = styled.Text(({ theme }) => ({
  fontSize: 12,
  color: theme.colors.gray[500],
}));

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

      <Pressable onPress={onPress}>
        <MaterialIcons name={name} size={16} color={theme.colors.gray[500]} />
      </Pressable>
    </Container>
  );
};

export default memo(Section);
