import { memo, useMemo } from 'react';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/native';

import theme from './src/theme';
import { myProfile } from './src/data';
import { Divider, Header, Profile } from './src/components';

const Container = styled(SafeAreaView)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.white,
}));

const App = () => {
  const edges = useMemo<Edge[]>(() => ['top', 'left', 'right'], []);

  return (
    <ThemeProvider theme={theme}>
      <Container edges={edges}>
        <StatusBar style="auto" />

        <Header />

        <Profile {...myProfile} marginTop={10} />

        <Divider marginTop={16} />
      </Container>
    </ThemeProvider>
  );
};

export default memo(App);
