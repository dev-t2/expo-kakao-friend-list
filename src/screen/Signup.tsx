import { memo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { BoldLink, PageTitle } from '../component/common';
import { Link, Button, Error, Form, Input, Layout } from '../component/auth';
import { email, name, nickname, password } from '../valid';
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

const SIGNUP_MUTATION = gql`
  mutation signup(
    $name: String!
    $nickname: String!
    $email: String!
    $password: String!
  ) {
    signup(
      name: $name
      nickname: $nickname
      email: $email
      password: $password
    ) {
      isSuccess
      error
    }
  }
`;

interface IForm {
  name?: string;
  email?: string;
  nickname?: string;
  password?: string;
  server?: string;
}

const Signup = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    setError,
    clearErrors,
  } = useForm<IForm>({
    mode: 'onChange',
  });

  const [signup, { loading }] = useMutation(SIGNUP_MUTATION, {
    onCompleted: ({ signup: { isSuccess, error } }) => {
      if (!isSuccess) {
        return setError('server', { message: error });
      }

      history.replace(HOME);
    },
  });

  const onValid: SubmitHandler<IForm> = useCallback(
    ({ name, nickname, email, password }) => {
      if (loading) return;

      signup({ variables: { name, nickname, email, password } });
    },
    [loading, signup]
  );

  const onFocus = useCallback(() => {
    clearErrors('server');
  }, [clearErrors]);

  return (
    <Layout>
      <PageTitle title="Signup" />

      <Form>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <SubTitle>친구들의 사진을 보려면 가입하세요.</SubTitle>
        </HeaderContainer>

        <form onSubmit={handleSubmit(onValid)}>
          <Input
            type="text"
            {...register('name', name)}
            placeholder="이름"
            isError={errors.name}
            onFocus={onFocus}
          />
          <Error message={errors.name?.message} />

          <Input
            type="text"
            {...register('nickname', nickname)}
            placeholder="닉네임"
            isError={errors.nickname}
            onFocus={onFocus}
          />
          <Error message={errors.nickname?.message} />

          <Input
            type="email"
            {...register('email', email)}
            placeholder="이메일"
            isError={errors.email}
            onFocus={onFocus}
          />
          <Error message={errors.email?.message} />

          <Input
            type="password"
            {...register('password', password)}
            placeholder="비밀번호"
            isError={errors.password}
            onFocus={onFocus}
          />
          <Error message={errors.password?.message} />

          <Button type="submit" disabled={!isValid || loading}>
            {loading ? '로딩 중...' : '가입'}
          </Button>

          <Error message={errors.server?.message} />
        </form>
      </Form>

      <Link text="계정이 있으신가요?" link={HOME} linkText="로그인" />
    </Layout>
  );
};

export default memo(Signup);
