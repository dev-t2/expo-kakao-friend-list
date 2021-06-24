import { useEffect } from 'react';
import { gql, useQuery, useReactiveVar } from '@apollo/client';

import { isLoggedInVar, removeToken } from '../../apollo';
import { me } from '../../__generated__/me';

const ME_QUERY = gql`
  query me {
    me {
      name
      avatar
    }
  }
`;

const useUser = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const { data } = useQuery<me>(ME_QUERY, {
    skip: !isLoggedIn,
  });

  useEffect(() => {
    if (data?.me === null) {
      removeToken();
    }
  }, [data]);

  return;
};

export default useUser;
