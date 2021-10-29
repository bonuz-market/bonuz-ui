import { Meta, Story } from '@storybook/react';
import { Navigation } from './navigation';

export default {
  title: 'Components/Atoms/Navigation',
  component: Navigation,
} as Meta;

const Template: Story = (args) => <Navigation {...args} />;

export const Primary = Template.bind({});
