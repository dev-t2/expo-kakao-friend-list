/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signup
// ====================================================

export interface signup_signup {
  __typename: 'CommonResult';
  isSuccess: boolean;
  error: string | null;
}

export interface signup {
  signup: signup_signup;
}

export interface signupVariables {
  name: string;
  nickname: string;
  email: string;
  password: string;
}
