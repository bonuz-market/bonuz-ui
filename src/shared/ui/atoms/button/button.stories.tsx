import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  type: 'button',
  outline: false,
};

export const Outline = Template.bind({});
Outline.args = {
  disabled: false,
  type: 'button',
  outline: true,
};
