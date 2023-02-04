import { faker } from '@faker-js/faker';

faker.locale = 'ko';

interface IProfile {
  avatar: string;
  name: string;
  introduction: string;
}

export const myProfile: IProfile = {
  avatar: faker.image.avatar(),
  name: `${faker.name.lastName()}${faker.name.firstName()}`,
  introduction: faker.lorem.words(),
};

export const friendProfiles: IProfile[] = new Array(20).fill(null).map(() => {
  const avatar = faker.image.avatar();
  const name = `${faker.name.lastName()}${faker.name.firstName()}`;
  const introduction = faker.lorem.words(Math.random() * 6);

  return { avatar, name, introduction };
});
