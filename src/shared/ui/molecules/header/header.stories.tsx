import { Meta, Story } from '@storybook/react';
import { Header } from './header';

export default {
  title: 'Components/Layout/Header',
  component: Header,
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Primary = Template.bind({});
