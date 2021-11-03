import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from './checkbox';

export default {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Subscribe to our newsletter',
};
