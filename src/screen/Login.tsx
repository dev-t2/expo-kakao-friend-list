import { memo } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Container = styled.div({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const BoxContainer = styled.div({
  maxWidth: '350px',
  width: '100%',
});

const Box = styled.div(({ theme }) => ({
  backgroundColor: 'white',
  border: `1px solid ${theme.borderColor}`,
}));

const TopBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '30px 40px',
  marginBottom: '10px',
});

const StyledForm = styled.form({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '30px',
});

const StyledInput = styled.input(({ theme }) => ({
  boxSizing: 'border-box',
  width: '100%',
  padding: '8px',
  backgroundColor: '#fafafa',
  border: `0.5px solid ${theme.borderColor}`,
  borderRadius: '4px',
  marginBottom: '5px',

  '&::placeholder': {
    fontSize: '12px',
  },
}));

const StyledButton = styled.button(({ theme }) => ({
  boxSizing: 'border-box',
  width: '100%',
  backgroundColor: theme.accent,
  color: 'white',
  textAlign: 'center',
  fontWeight: 600,
  border: 'none',
  borderRadius: '4px',
  padding: '8px',
  marginTop: '10px',
}));

const BottomBox = styled(Box)({
  padding: '20px 0',
  textAlign: 'center',
});

const StyledLink = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  color: theme.accent,
  marginLeft: '8px',
}));

const Login = () => {
  return (
    <Container>
      <BoxContainer>
        <TopBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>

          <StyledForm>
            <StyledInput
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <StyledInput type="password" placeholder="비밀번호" />
            <StyledButton type="submit">로그인</StyledButton>
          </StyledForm>
        </TopBox>

        <BottomBox>
          <span>계정이 없으신가요?</span>
          <StyledLink to="/signup">가입하기</StyledLink>
        </BottomBox>
      </BoxContainer>
    </Container>
  );
};

export default memo(Login);
