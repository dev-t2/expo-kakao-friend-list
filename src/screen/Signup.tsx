import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

import { BoldLink, PageTitle } from '../component/common';
import { BottomLink, Button, Form, Input, Layout } from '../component/auth';
import { HOME } from '../route';

const HeaderContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const SubTitle = styled(BoldLink)({
  textAlign: 'center',
  marginTop: '10px',
});

const Signup = () => {
  return (
    <Layout>
      <PageTitle title="Signup" />

      <Form>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <SubTitle>친구들의 사진을 보려면 가입하세요.</SubTitle>
        </HeaderContainer>

        <form>
          <Input type="email" placeholder="이메일" />
          <Input type="text" placeholder="이름" />
          <Input type="text" placeholder="닉네임" />
          <Input type="password" placeholder="비밀번호" />
          <Button type="submit">가입</Button>
        </form>
      </Form>

      <BottomLink text="계정이 있으신가요?" link={HOME} linkText="로그인" />
    </Layout>
  );
};

export default memo(Signup);
