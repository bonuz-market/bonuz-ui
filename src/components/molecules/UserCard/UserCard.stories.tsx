import { Meta, Story } from '@storybook/react';
import { UserCard, UserCardProps } from './UserCard';

export default {
  title: 'Components/Molecules/UserCard',
  component: UserCard,
} as Meta;

const translations = {
  addresses: 'Addresses',
  info: 'Information',
  firstName: 'First Name',
  lastName: 'Last Name',
};

const Template: Story<UserCardProps> = (args) => <UserCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  photo: 'https://via.placeholder.com/320x180',
  shortLink: '@mmcrypto',
  created: '28-01-2021 4:30pm',
  t: (key) => (translations as any)[key],
  info: {
    firstName: 'Oliver',
    lastName: 'Molnar',
  },
  addresses: [
    {
      address: '0x2345E...AE',
      coins: 124,
    },
    {
      address: '0x2345E...AE',
      coins: 124,
    },
  ],
};
