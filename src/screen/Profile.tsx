import { memo } from 'react';
import { useParams } from 'react-router-dom';

interface IParams {
  nickname: string;
}

const Profile = () => {
  const { nickname } = useParams<IParams>();

  console.log(nickname);

  return <div></div>;
};

export default memo(Profile);
