import { Meta, Story } from '@storybook/react';
import { AdvantagesList, AdvantagesListProps } from './advantages-list';
import mockData from '@/shared/mock/mock-data.json';

export default {
  title: 'Components/Molecules/AdvantagesList',
  component: AdvantagesList,
} as Meta;

const Template: Story<AdvantagesListProps> = (args) => (
  <div id="second">
    <h1 style={{ color: '#FFFFFF' }}>TODO make slider on mobile devices</h1>
    <AdvantagesList {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  items: mockData.advantages,
};
