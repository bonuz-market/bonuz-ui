import { Meta, Story } from '@storybook/react';
import { Users, UsersProps } from './users';

export default {
  title: 'Components/Molecules/Users',
  component: Users,
} as Meta;

const translations = {
  name: 'Name',
  coins: 'Coins',
  level: 'Level',
};

const Template: Story<UsersProps> = (args) => <Users {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  t: (key) => (translations as any)[key],
  users: [
    {
      name: 'Mende_supeende_supe',
      coins: 124,
      level: '90%',
    },
    {
      name: 'Mende_supeende_supe',
      coins: 124,
      level: '90%',
    },
    {
      name: 'Mende_supeende_supe',
      coins: 124,
      level: '90%',
    },
    {
      name: 'Mende_supeende_supe',
      coins: 124,
      level: '90%',
    },
    {
      name: 'Mende_supeende_supe',
      coins: 124,
      level: '90%',
    },
    {
      name: 'Mende_supeende_supe',
      coins: 124,
      level: '90%',
    },
    {
      name: 'Mende_supeende_supe',
      coins: 124,
      level: '90%',
    },
  ],
};
