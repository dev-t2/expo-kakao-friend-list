import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

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

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: localStorage.getItem(TOKEN) ?? '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      User: {
        keyFields: obj => `User:${obj.nickname}`,
      },
    },
  }),
});
