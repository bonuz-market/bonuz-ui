import { Meta, Story } from '@storybook/react';
import { AdvantagesItem, AdvantagesItemProps } from './advantages-item';
import mockData from '../../../mock/mock-data.json';
import './advantages-wrapper.scss';

export default {
  title: 'Components/Atoms/AdvantagesItem',
  component: AdvantagesItem,
} as Meta;

const Template: Story<AdvantagesItemProps> = (args) => (
  <div id="advantages">
    <AdvantagesItem {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = mockData.advantages.map((item) => ({
  ...item,
  icon: require(`/src/assets/images/${item.icon}`),
}))[0];
