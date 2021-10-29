import { Meta, Story } from '@storybook/react';
import { Footer } from './footer';

export default {
  title: 'Components/Molecules/Footer',
  component: Footer,
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
