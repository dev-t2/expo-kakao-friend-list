import { memo } from 'react';
import { PageTitle } from '../component/common';

const NotFound = () => {
  return (
    <div>
      <PageTitle title="Not Found" />

      <h1>Not Found</h1>
    </div>
  );
};

export default memo(NotFound);
