import { Meta, Story } from '@storybook/react';
import { Tabs, TabsProps } from './tabs';
import { Tab } from '../../atoms';

export default {
  title: 'Components/Molecules/Tabs',
  component: Tabs,
} as Meta;

const Template: Story<TabsProps> = (args) => (
  <Tabs {...args}>
    <Tab title="First tab">This is example text from first tab</Tab>
    <Tab title="Second tab">This is example text from second tab</Tab>
    <Tab title="Third tab">This is example text from third tab</Tab>
  </Tabs>
);

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};
