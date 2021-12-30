import { Meta, Story } from '@storybook/react';
import { HowItWorksItem, HowItWorksItemProps } from './how-it-works-item';
import mockData from '../../../mock/mock-data.json';
import './how-it-works-wrapper.scss';

export default {
  title: 'Components/Atoms/HowItWorksItem',
  component: HowItWorksItem,
} as Meta;

const Template: Story<HowItWorksItemProps> = (args) => (
  <div id="how-it-works">
    <HowItWorksItem {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = mockData.howItWorks.map((item) => ({
  ...item,
  img: require(`/src/assets/images/${item.img}`),
}))[0];
