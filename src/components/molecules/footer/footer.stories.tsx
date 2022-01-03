import { Meta, Story } from '@storybook/react';
import { Footer } from './footer';

export default {
  title: 'Components/Layout/Footer',
  component: Footer,
} as Meta;

const Template: Story = (args) => (
  <Footer
    {...args}
    NavigationElements={[
      <a key={1} href="#how-it-works">
        How it works
      </a>,
      <a key={2} href="#how-it-works">
        How it works
      </a>,
      <a key={3} href="#how-it-works">
        How it works
      </a>,
      <a key={4} href="#how-it-works">
        How it works
      </a>,
      <a key={5} href="#how-it-works">
        How it works
      </a>,
      <a key={6} href="#how-it-works">
        How it works
      </a>,
    ]}
  />
);

export const Primary = Template.bind({});
