import { Meta, Story } from '@storybook/react';
import { Header } from './header';

export default {
  title: 'Components/Layout/Header',
  component: Header,
} as Meta;
const Template: Story = (args) => (
  <div style={{ height: '200vh' }}>
    <Header {...args} />
  </div>
);

export const Primary = Template.bind({});
