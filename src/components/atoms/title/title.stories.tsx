import { PropsWithChildren } from 'react';
import { Meta, Story } from '@storybook/react';
import { Title } from './title';

export default {
  title: 'Components/Atoms/Title',
  component: Title,
} as Meta;

const Template: Story<PropsWithChildren<{}>> = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'This is a title!',
};
