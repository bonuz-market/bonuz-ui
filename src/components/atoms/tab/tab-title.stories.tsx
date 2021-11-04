import { Meta, Story } from '@storybook/react';
import { TabTitle, TabTitleProps } from './tab-title';

export default {
  title: 'Components/Atoms/TabTitle',
  component: TabTitle,
} as Meta;

const Template: Story<TabTitleProps> = (args) => (
  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
    <TabTitle {...args} />
  </ul>
);

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  title: 'Example title',
  isActive: false,
};
