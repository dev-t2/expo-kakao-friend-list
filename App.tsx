import { memo, useCallback, useMemo, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/native';

import theme from './src/theme';
import { friendProfiles, IProfileData, myProfile } from './src/data';
import { Divider, Header, Profile, Section, Separator, TabBar } from './src/components';

const Container = styled(SafeAreaView)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.white,
}));

const ListHeaderContainer = styled.View({
  marginBottom: 5,
});

const App = () => {
  const [isOpened, setIsOpened] = useState(true);

  const contentContainerStyle = useMemo(() => {
    return { paddingHorizontal: 20, paddingBottom: 10 };
  }, []);

  const data = useMemo(() => (isOpened ? friendProfiles : []), [isOpened]);

  const ListHeaderComponent = useCallback(() => {
    return (
      <ListHeaderContainer>
        <Profile marginTop={10} isMyProfile {...myProfile} />

        <Divider marginTop={10} />

        <Section
          marginTop={10}
          length={friendProfiles.length}
          isOpened={isOpened}
          onPress={() => setIsOpened((prevState) => !prevState)}
        />
      </ListHeaderContainer>
    );
  }, [isOpened]);

  const keyExtractor = useCallback((_: IProfileData, index: number) => `${index}`, []);

  const renderItem = useCallback<ListRenderItem<IProfileData>>(({ item }) => {
    return <Profile {...item} />;
  }, []);

  const ItemSeparatorComponent = useCallback(() => <Separator />, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Container edges={['top', 'left', 'right']}>
          <StatusBar style="auto" />

          <Header />

          <FlatList
            contentContainerStyle={contentContainerStyle}
            showsVerticalScrollIndicator={false}
            data={data}
            ListHeaderComponent={ListHeaderComponent}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparatorComponent}
          />
        </Container>

        <TabBar />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default memo(App);
