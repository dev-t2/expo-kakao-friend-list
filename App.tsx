import { memo, useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/native';

import theme from './src/theme';
import { friendProfiles, myProfile } from './src/data';
import { Divider, Header, List, Profile, Section } from './src/components';

const Container = styled(SafeAreaView)(({ theme }) => ({
  flex: 1,
  paddingHorizontal: 16,
  backgroundColor: theme.colors.white,
}));

const App = () => {
  const [isOpened, setIsOpened] = useState(true);

  const onPress = useCallback(() => {
    setIsOpened((prevState) => !prevState);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container edges={['top', 'left', 'right']}>
        <StatusBar style="auto" />

        <Header />

        <Profile {...myProfile} marginTop={10} />

        <Divider marginTop={16} />

        <Section
          marginTop={10}
          length={friendProfiles.length}
          isOpened={isOpened}
          onPress={onPress}
        />

        {isOpened && <List profiles={friendProfiles} />}
      </Container>
    </ThemeProvider>
  );
};

export default memo(App);
