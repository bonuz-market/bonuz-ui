import { Meta, Story } from '@storybook/react';

import { TextBlock, TextBlockPropsWithChildren } from './text-block';

export default {
  title: 'Components/Atoms/TextBlock',
  component: TextBlock,
} as Meta;

const Template: Story<TextBlockPropsWithChildren> = (args) => (
  <TextBlock {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur aut dolor, doloribus eum iusto molestias sequi! Amet, optio, veniam!',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur aut dolor, doloribus eum iusto molestias sequi! Amet, optio, veniam!',
};
