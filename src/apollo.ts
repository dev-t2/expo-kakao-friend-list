import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const DARK_MODE = 'DARK_MODE';

export const isDarkModeVar = makeVar(!!localStorage.getItem(DARK_MODE));

export const setDarkMode = () => {
  localStorage.setItem(DARK_MODE, 'enabled');

  isDarkModeVar(true);
};

export const removeDarkMode = () => {
  localStorage.removeItem(DARK_MODE);

  isDarkModeVar(false);
};

const TOKEN = 'TOKEN';

export const isLoggedInVar = makeVar(!!localStorage.getItem(TOKEN));

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN, token);

  isLoggedInVar(true);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN);

  window.location.reload();
};
