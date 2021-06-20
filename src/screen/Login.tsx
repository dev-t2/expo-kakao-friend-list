import { memo, useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { PageTitle } from '../component/common';
import { Link, Button, Error, Form, Input, Layout } from '../component/auth';
import { SIGNUP } from '../route';

interface IForm {
  email?: string;
  password?: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<IForm>({
    mode: 'onChange',
  });

  const onValid: SubmitHandler<IForm> = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Layout>
      <PageTitle title="Login" />

      <Form>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>

        <form onSubmit={handleSubmit(onValid)}>
          <Input
            type="email"
            {...register('email', {
              required: { value: true, message: '이메일을 입력하세요' },
            })}
            placeholder="이메일"
            isError={errors.email}
          />
          <Error message={errors.email?.message} />

          <Input
            type="password"
            {...register('password', {
              required: { value: true, message: '비밀번호를 입력하세요' },
              minLength: { value: 6, message: '6자리 이상 입력하세요' },
            })}
            placeholder="비밀번호"
            isError={errors.password}
          />
          <Error message={errors.password?.message} />

          <Button type="submit" disabled={!isValid}>
            로그인
          </Button>
        </form>
      </Form>

      <Link text="계정이 없으신가요?" link={SIGNUP} linkText="가입하기" />
    </Layout>
  );
};

export default memo(Login);
