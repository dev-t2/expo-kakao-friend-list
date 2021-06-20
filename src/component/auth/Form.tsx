import { FC, memo, ReactNode } from 'react';
import styled from 'styled-components';
import { Box } from '../common';

const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '30px 40px',
  marginBottom: '10px',

  form: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '30px',
  },
});

interface IForm {
  children: ReactNode;
}

const Form: FC<IForm> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default memo(Form);
