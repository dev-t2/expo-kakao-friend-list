import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { BottomLink, Button, Form, Input, Layout } from '../component/auth';
import { SIGNUP } from '../route';

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

      <BottomLink text="계정이 없으신가요?" link={SIGNUP} linkText="가입하기" />
    </Layout>
  );
};

export default memo(Login);
