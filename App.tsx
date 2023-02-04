import { memo, useMemo } from 'react';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/native';

import theme from './src/theme';
import { Header } from './src/components';

const Container = styled(SafeAreaView)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.white,
}));

const App = () => {
  const edges = useMemo<Edge[]>(() => ['top'], []);

  return (
    <ThemeProvider theme={theme}>
      <Container edges={edges}>
        <StatusBar style="auto" />

        <Header />
      </Container>
    </ThemeProvider>
  );
};

export default memo(App);
