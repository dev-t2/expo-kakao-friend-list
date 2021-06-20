import { memo } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import { Button, Form, Input, Layout } from '../component/auth';
import { Box } from '../component/common';
import { SIGNUP } from '../route';

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
    <Layout>
      <Form>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>

        <form>
          <Input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
          <Input type="password" placeholder="비밀번호" />
          <Button type="submit">로그인</Button>
        </form>
      </Form>

      <BottomBox>
        <span>계정이 없으신가요?</span>
        <StyledLink to={SIGNUP}>가입하기</StyledLink>
      </BottomBox>
    </Layout>
  );
};

export default memo(Login);
