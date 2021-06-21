import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

const TOKEN = 'token';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export const isDarkModeVar = makeVar(false);
export const isLoggedInVar = makeVar(!!localStorage.getItem(TOKEN));

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN, token);

  isLoggedInVar(true);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN);

  isLoggedInVar(false);
};
