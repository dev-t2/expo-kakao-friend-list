import { FC, memo, useMemo } from 'react';
import { Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

interface IContainer {
  marginTop?: number;
}

const Container = styled.View<IContainer>(({ marginTop }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginTop,
}));

const Title = styled.Text(({ theme }) => ({
  flex: 1,
  fontSize: 12,
  fontWeight: '400',
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

      <Pressable hitSlop={10} onPress={onPress}>
        <MaterialIcons name={name} size={14} color={theme.colors.gray[300]} />
      </Pressable>
    </Container>
  );
};

export default memo(Section);
