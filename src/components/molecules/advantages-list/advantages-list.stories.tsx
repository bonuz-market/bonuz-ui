import { Meta, Story } from '@storybook/react';
import { AdvantagesList, AdvantagesListProps } from './advantages-list';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Molecules/AdvantagesList',
  component: AdvantagesList,
} as Meta;

const Template: Story<AdvantagesListProps> = (args) => (
  <div className="advantages__list">
    <AdvantagesList {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  items: mockData.advantages.map((item) => ({
    ...item,
    icon: require(`/src/assets/images/${item.icon}`),
  })),
};
