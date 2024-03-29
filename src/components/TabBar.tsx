import { memo, useCallback, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

interface IContainer {
  paddingBottom: number;
}

const Container = styled.View<IContainer>(({ theme, paddingBottom }) => ({
  flexDirection: 'row',
  paddingBottom,
  borderTopWidth: 1,
  borderTopColor: theme.colors.gray[300],
}));

const IconButton = styled.Pressable({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 12,
});

const TabBar = () => {
  const { bottom } = useSafeAreaInsets();

  const theme = useTheme();

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const onPress = useCallback(
    (tabIndex: number) => () => {
      setSelectedTabIndex(tabIndex);
    },
    []
  );

  return (
    <Container paddingBottom={bottom}>
      <IconButton hitSlop={10} onPress={onPress(0)}>
        <Ionicons
          name={selectedTabIndex === 0 ? 'person' : 'person-outline'}
          size={20}
          color={theme.colors.black}
        />
      </IconButton>

      <IconButton hitSlop={10} onPress={onPress(1)}>
        <Ionicons
          name={selectedTabIndex === 1 ? 'chatbubble' : 'chatbubble-outline'}
          size={20}
          color={theme.colors.black}
        />
      </IconButton>

      <IconButton hitSlop={10} onPress={onPress(2)}>
        <Ionicons
          name={selectedTabIndex === 2 ? 'menu' : 'menu-outline'}
          size={20}
          color={theme.colors.black}
        />
      </IconButton>

      <IconButton hitSlop={10} onPress={onPress(3)}>
        <Ionicons
          name={selectedTabIndex === 3 ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline'}
          size={20}
          color={theme.colors.black}
        />
      </IconButton>
    </Container>
  );
};

export default memo(TabBar);
