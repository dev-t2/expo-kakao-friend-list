import { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  height: 10,
});

const Separator = () => {
  return <Container />;
};

export default memo(Separator);
