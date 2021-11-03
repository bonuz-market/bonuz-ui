import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from './input';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Subscribe to news:',
  placeholder: 'Enter you email',
};

export const WithActionButton = Template.bind({});
WithActionButton.args = {
  label: 'Subscribe to news:',
  placeholder: 'Enter you email',
  actionButton: (
    <button type="button">
      <img src="/assets/images/f_i.svg" alt="" />
    </button>
  ),
};
