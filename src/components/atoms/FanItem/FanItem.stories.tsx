import { Meta, Story } from '@storybook/react';
import { FanItem, FanItemProps } from './FanItem';

export default {
  title: 'Components/Atoms/FanItem',
  component: FanItem,
} as Meta;

const Template: Story<FanItemProps> = (args) => <FanItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  avatar: 'https://via.placeholder.com/62x62',
  name: 'Oliver Molnar',
  description:
    'Text example Text example Text example Text example Text example Text example Text example',
  viewers: 200,
};
