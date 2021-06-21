export const name = {
  required: { value: true, message: '이름을 입력하세요.' },
  pattern: {
    value: /^[가-힣]+$/,
    message: '한글만 입력하세요.',
  },
  minLength: { value: 2, message: '2~4자 이내로 입력하세요.' },
  maxLength: { value: 4, message: '2~4자 이내로 입력하세요.' },
};

export const nickname = {
  required: { value: true, message: '닉네임을 입력하세요.' },
  pattern: {
    value: /^[가-힣a-zA-Z0-9]+$/,
    message: '한글과 영문 대소문자, 숫자만 입력하세요.',
  },
  minLength: { value: 2, message: '2~12자 이내로 입력하세요.' },
  maxLength: { value: 12, message: '2~12자 이내로 입력하세요.' },
};

export const email = {
  required: { value: true, message: '이메일을 입력하세요.' },
  pattern: {
    value: /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/,
    message: '이메일 주소를 다시 확인하세요.',
  },
};

export const password = {
  required: { value: true, message: '비밀번호를 입력하세요.' },
  pattern: {
    value: /^[a-zA-Z0-9]+$/,
    message: '비밀번호를 다시 확인하세요.',
  },
  minLength: { value: 6, message: '6~16자 이내로 입력하세요.' },
  maxLength: { value: 16, message: '6~16자 이내로 입력하세요.' },
};
