import { Meta, Story } from '@storybook/react';
import { HowItWorksItem, HowItWorksItemProps } from './how-it-works-item';
import mockData from '@/shared/mock/mock-data.json';

export default {
  title: 'Components/Atoms/HowItWorksItem',
  component: HowItWorksItem,
} as Meta;

const Template: Story<HowItWorksItemProps> = (args) => (
  <div id="four">
    <HowItWorksItem {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = mockData.howItWorks[0];
