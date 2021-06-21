import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  backgroundColor: '#fafafa',
  color: '#262626',
  accent: '#0095f6',
  borderColor: '#dbdbdb',
};

export const darkTheme: DefaultTheme = {
  backgroundColor: '#121212',
  color: '#ffffff',
  accent: '#0095f6',
  borderColor: '#dbdbdb',
};

export const GlobalStyle = createGlobalStyle(({ theme }) => ({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: theme.backgroundColor,
    fontSize: 14,
    fontFamily: 'Noto Sans KR, sans-serif',
    color: theme.color,
  },
  input: {
    all: 'unset',
  },
  button: {
    all: 'unset',
  },
  a: {
    textDecoration: 'none',
  },
}));
