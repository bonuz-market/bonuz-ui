import { Meta, Story } from '@storybook/react';
import { Button, ButtonPropsWithChildren } from './button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonPropsWithChildren> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  type: 'button',
  outline: false,
  children: 'Hello, world!',
};

export const Outline = Template.bind({});
Outline.args = {
  disabled: false,
  type: 'button',
  outline: true,
  children: 'Hello, world!',
};
