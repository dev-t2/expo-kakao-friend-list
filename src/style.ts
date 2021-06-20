import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {};

export const darkTheme: DefaultTheme = {};

export const GlobalStyle = createGlobalStyle(({ theme }) => ({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: '#fafafa',
    fontSize: '14px',
    fontFamily: 'Noto Sans KR, sans-serif',
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
