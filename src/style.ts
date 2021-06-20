import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  accent: '#0095f6',
  borderColor: '#dbdbdb',
};

export const darkTheme: DefaultTheme = {
  accent: '#0095f6',
  borderColor: '#dbdbdb',
};

export const GlobalStyle = createGlobalStyle(({ theme }) => ({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: '#fafafa',
    fontSize: 14,
    fontFamily: 'Noto Sans KR, sans-serif',
    color: '#262626',
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
