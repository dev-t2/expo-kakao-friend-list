import { memo } from 'react';
import styled from 'styled-components';
import { useReactiveVar } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

import { isLoggedInVar } from '../../apollo';

const Container = styled.header({});

const Wrapper = styled.div({});

const Icon = styled.span({});

const Header = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <Container>
      <Wrapper>
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
          ) : null}
        </div>
      </Wrapper>
    </Container>
  );
};

export default memo(Header);
