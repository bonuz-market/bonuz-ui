import { Meta, Story } from '@storybook/react';
import { Navigation } from './navigation';

export default {
  title: 'Components/Atoms/Navigation',
  component: Navigation,
} as Meta;

const Template: Story = (args) => (
  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
    <Navigation {...args}>
      <a href="#how-it-works">How it works</a>
      <a href="#how-it-works">How it works</a>
      <a href="#how-it-works">How it works</a>
      <a href="#how-it-works">How it works</a>
      <a href="#how-it-works">How it works</a>
    </Navigation>
  </ul>
);

export const Primary = Template.bind({});
