import { FC, memo } from 'react';
import styled from '@emotion/native';

interface IContainer {
  marginTop?: number;
}

const Container = styled.View<IContainer>(({ theme, marginTop }) => ({
  height: 1,
  backgroundColor: theme.colors.gray[300],
  marginTop,
}));

interface IDivider {
  marginTop?: number;
}

const Divider: FC<IDivider> = ({ marginTop }) => {
  return <Container marginTop={marginTop} />;
};

export default memo(Divider);
