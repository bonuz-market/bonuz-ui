import { Meta, Story } from '@storybook/react';
import { SocialList } from './social-list';

export default {
  title: 'Components/Atoms/SocialList',
  component: SocialList,
} as Meta;

const Template: Story = (args) => <SocialList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
