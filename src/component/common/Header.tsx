import { memo } from 'react';
import styled from 'styled-components';
import { useReactiveVar } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { isLoggedInVar } from '../../apollo';
import { HOME } from '../../route';
import { useUser } from '../hook';

const StyledHeader = styled.header(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.background,
  borderBottom: `1px solid ${theme.border}`,
  padding: '18px 0',
}));

const Container = styled.div({
  maxWidth: '930px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Icon = styled.span({
  marginLeft: '15px',
});

const Button = styled.span(({ theme }) => ({
  backgroundColor: theme.primary,
  borderRadius: '4px',
  padding: '4px 15px',
  color: theme.background,
  fontWeight: 600,
}));

const Header = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const loggedInUser = useUser();

  return (
    <StyledHeader>
      <Container>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </div>

        <div>
          {isLoggedIn ? (
            <>
              <Icon>
                <FontAwesomeIcon icon={faHome} size="lg" />
              </Icon>

              <Icon>
                <FontAwesomeIcon icon={faCompass} size="lg" />
              </Icon>

              <Icon>
                <FontAwesomeIcon icon={faUser} size="lg" />
              </Icon>
            </>
          ) : (
            <Link to={HOME}>
              <Button>로그인</Button>
            </Link>
          )}
        </div>
      </Container>
    </StyledHeader>
  );
};

export default memo(Header);
