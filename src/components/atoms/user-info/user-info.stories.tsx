import { Meta, Story } from '@storybook/react';
import { UserInfo, UserInfoProps } from './user-info';

export default {
  title: 'Components/Atoms/UserInfo',
  component: UserInfo,
} as Meta;

const Template: Story<UserInfoProps> = (args) => <UserInfo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  avatar: require(`/src/assets/content/user-photo.png`),
  name: 'Matias Mende',
  balance: 2000,
  followers: '12k',
  posts: '54k',
};
