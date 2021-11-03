import { Meta, Story } from '@storybook/react';
import { AdvantagesList, AdvantagesListProps } from './advantages-list';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Molecules/AdvantagesList',
  component: AdvantagesList,
} as Meta;

const Template: Story<AdvantagesListProps> = (args) => (
  <div id="second">
    <AdvantagesList {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  items: mockData.advantages,
};
