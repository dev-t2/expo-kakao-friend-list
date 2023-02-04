import { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/native';

import theme from './src/theme';
import { Header } from './src/components';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.white,
}));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar style="auto" />

        <Header />
      </Container>
    </ThemeProvider>
  );
};

export default memo(App);
