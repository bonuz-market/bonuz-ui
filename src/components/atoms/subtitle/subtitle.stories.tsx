import { Meta, Story } from '@storybook/react';
import { PropsWithChildren } from 'react';
import { Subtitle } from './Subtitle';

export default {
  title: 'Components/Atoms/Subtitle',
  component: Subtitle,
} as Meta;

const Template: Story<PropsWithChildren<{}>> = (args) => <Subtitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'This is very very long example description for my storybook!',
};
