import { Meta, Story } from '@storybook/react';
import { AdvantagesList, AdvantagesListProps } from './advantages-list';
import mockData from '../../../mock/mock-data.json';
import './advantages-list.scss';

export default {
  title: 'Components/Molecules/AdvantagesList',
  component: AdvantagesList,
} as Meta;

const Template: Story<AdvantagesListProps> = (args) => (
  <AdvantagesList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  items: mockData.advantages.map((item) => ({
    ...item,
    icon: require(`/src/assets/images/${item.icon}`),
  })),
};
