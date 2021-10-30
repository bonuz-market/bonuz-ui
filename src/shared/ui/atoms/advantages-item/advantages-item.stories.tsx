import { Meta, Story } from '@storybook/react';
import { AdvantagesItem, AdvantagesItemProps } from './advantages-item';
import mockData from '@/shared/mock/mock-data.json';

export default {
  title: 'Components/Atoms/AdvantagesItem',
  component: AdvantagesItem,
} as Meta;

const Template: Story<AdvantagesItemProps> = (args) => (
  <div id="second">
    <AdvantagesItem {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = mockData.advantages[0];
