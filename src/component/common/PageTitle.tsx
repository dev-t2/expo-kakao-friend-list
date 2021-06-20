import { FC, memo } from 'react';
import { Helmet } from 'react-helmet-async';

interface IPageTitle {
  title: string;
}

const PageTitle: FC<IPageTitle> = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | InstaClone</title>
    </Helmet>
  );
};

export default memo(PageTitle);
