import { Meta, Story } from '@storybook/react';
import { ActionButton, ActionButtonProps } from './action-button';

export default {
  title: 'Components/Atoms/ActionButton',
  component: ActionButton,
} as Meta;

const Template: Story<ActionButtonProps> = (args) => <ActionButton {...args} />;

export const Left = Template.bind({});
Left.args = {
  type: 'left',
};

export const Right = Template.bind({});
Right.args = {
  type: 'right',
};
