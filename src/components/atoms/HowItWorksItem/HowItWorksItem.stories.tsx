import { Meta, Story } from '@storybook/react';
import { HowItWorksItem, HowItWorksItemProps } from './HowItWorksItem';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Atoms/HowItWorksItem',
  component: HowItWorksItem,
} as Meta;

const Template: Story<HowItWorksItemProps> = (args) => (
  <HowItWorksItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = mockData.howItWorks.map((item) => ({
  ...item,
  img: require(`/src/assets/images/${item.img}`),
}))[0];
