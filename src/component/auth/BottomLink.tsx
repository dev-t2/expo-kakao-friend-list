import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Box } from '../common';

const Container = styled(Box)(({ theme }) => ({
  padding: '20px 0',
  textAlign: 'center',

  a: {
    fontWeight: 600,
    color: theme.accent,
    marginLeft: '8px',
  },
}));

interface IBottomLink {
  text: string;
  link: string;
  linkText: string;
}

const BottomLink: FC<IBottomLink> = ({ text, link, linkText }) => {
  return (
    <Container>
      <span>{text}</span>
      <Link to={link}>{linkText}</Link>
    </Container>
  );
};

export default memo(BottomLink);
