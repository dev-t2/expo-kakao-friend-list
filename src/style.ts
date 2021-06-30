import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  background: '#fafafa',
  surface: '#ffffff',
  primary: '#1976d2',
  onSurface: '#262626',
  border: '#dddddd',
  focus: '#999999',
  error: '#f44336',
};

export const darkTheme: DefaultTheme = {
  background: '#121212',
  surface: '#333333',
  primary: '#2196f3',
  onSurface: '#ffffff',
  border: '#121212',
  focus: '#666666',
  error: '#f44336',
};

export const GlobalStyle = createGlobalStyle(({ theme }) => ({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: theme.background,
    fontSize: 14,
    fontFamily: 'Noto Sans KR, sans-serif',
    color: theme.onSurface,
  },
  input: {
    all: 'unset',
  },
  button: {
    all: 'unset',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));
