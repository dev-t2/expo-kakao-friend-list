import { FC, memo } from 'react';
import { ScrollView } from 'react-native';

import { IProfileData } from '../data';
import Profile from './Profile';

interface IList {
  profiles: IProfileData[];
}

const List: FC<IList> = ({ profiles }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {profiles.map((profile, index) => (
        <Profile key={index} marginTop={index !== 0 ? 10 : 0} {...profile} />
      ))}
    </ScrollView>
  );
};

export default memo(List);
