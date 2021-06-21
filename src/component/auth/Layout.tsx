import { FC, memo, ReactNode } from 'react';
import styled from 'styled-components';
import { useReactiveVar } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

import { isDarkModeVar, removeDarkMode, setDarkMode } from '../../apollo';

const Container = styled.div({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const Wrapper = styled.div({
  maxWidth: '350px',
  width: '100%',
});

const Footer = styled.footer({
  marginTop: '20px',
});

const DarkMode = styled.span({
  cursor: 'pointer',
});

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  const isDarkMode = useReactiveVar(isDarkModeVar);

  return (
    <Container>
      <Wrapper>{children}</Wrapper>

      <Footer>
        <DarkMode onClick={isDarkMode ? removeDarkMode : setDarkMode}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </DarkMode>
      </Footer>
    </Container>
  );
};

export default memo(Layout);
