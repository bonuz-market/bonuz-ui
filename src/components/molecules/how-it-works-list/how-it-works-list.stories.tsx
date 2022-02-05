import { Meta, Story } from '@storybook/react';
import { HowItWorksList, HowItWorksListProps } from './how-it-works-list';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Molecules/HowItWorksList',
  component: HowItWorksList,
} as Meta;

const Template: Story<HowItWorksListProps> = (args) => (
  <div className="how-it-works-list">
    <HowItWorksList {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  items: mockData.howItWorks.map((item) => ({
    ...item,
    img: require(`/src/assets/images/${item.img}`),
  })),
};
