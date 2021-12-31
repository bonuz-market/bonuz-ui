import { Meta, Story } from '@storybook/react';
import { AdvantagesList, AdvantagesListProps } from './advantages-list';
import mockData from '../../../mock/mock-data.json';
import '../../atoms/advantages-item/advantages-wrapper.scss';

export default {
  title: 'Components/Molecules/AdvantagesList',
  component: AdvantagesList,
} as Meta;

const Template: Story<AdvantagesListProps> = (args) => (
  <div id="advantages">
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
