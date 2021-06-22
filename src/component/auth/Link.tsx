import { FC, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { Box } from '../common';

const Container = styled(Box)(({ theme }) => ({
  padding: '20px 0',
  textAlign: 'center',

  a: {
    fontWeight: 600,
    color: theme.primary,
    marginLeft: '8px',
  },
}));

interface ILink {
  text: string;
  link: string;
  linkText: string;
}

const Link: FC<ILink> = ({ text, link, linkText }) => {
  return (
    <Container>
      <span>{text}</span>
      <RouterLink to={link}>{linkText}</RouterLink>
    </Container>
  );
};

export default memo(Link);
