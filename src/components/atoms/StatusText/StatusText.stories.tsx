import { Meta, Story } from '@storybook/react';
import { StatusText, StatusTextProps } from './StatusText';

export default {
  title: 'Components/Atoms/StatusText',
  component: StatusText,
} as Meta;

const Template: Story<StatusTextProps> = (args) => <StatusText {...args} />;

export const Success = Template.bind({});
Success.args = {
  message: 'This is a success message, it disappear after 5 seconds',
  type: 'success',
  alwaysVisible: true,
};
export const Error = Template.bind({});
Error.args = {
  message: 'This is a error message',
  type: 'error',
};
export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning message',
  type: 'warning',
};
