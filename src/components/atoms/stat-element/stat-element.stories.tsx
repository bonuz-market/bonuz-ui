import { Meta, Story } from '@storybook/react';
import { StatElement, StatElementProps } from './stat-element';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Atoms/StatElement',
  component: StatElement,
} as Meta;

const Template: Story<StatElementProps> = (args) => <StatElement {...args} />;

export const Primary = Template.bind({});
Primary.args = mockData.statistic.map((item) => ({
  ...item,
  img: require(`/src/assets/images/${item.img}`),
}))[0];
