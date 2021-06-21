export const name = {
  required: { value: true, message: '이름을 입력하세요.' },
};

export const nickname = {
  required: { value: true, message: '닉네임을 입력하세요.' },
};

export const email = {
  required: { value: true, message: '이메일을 입력하세요.' },
};

export const password = {
  required: { value: true, message: '비밀번호를 입력하세요.' },
  minLength: { value: 6, message: '6자리 이상 입력하세요.' },
};
