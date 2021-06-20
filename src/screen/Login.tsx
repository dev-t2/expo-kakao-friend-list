import { memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { PageTitle } from '../component/common';
import { BottomLink, Button, Form, Input, Layout } from '../component/auth';
import { SIGNUP } from '../route';

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onValid = useCallback(data => {
    console.log(data);
  }, []);

  const onInvalid = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Layout>
      <PageTitle title="Login" />

      <Form>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>

        <form onSubmit={handleSubmit(onValid, onInvalid)}>
          <Input
            {...register('email', { required: true })}
            type="email"
            name="email"
            placeholder="이메일"
          />
          <Input
            {...register('password', { required: true })}
            type="password"
            name="password"
            placeholder="비밀번호"
          />
          <Button type="submit">로그인</Button>
        </form>
      </Form>

      <BottomLink text="계정이 없으신가요?" link={SIGNUP} linkText="가입하기" />
    </Layout>
  );
};

export default memo(Login);
