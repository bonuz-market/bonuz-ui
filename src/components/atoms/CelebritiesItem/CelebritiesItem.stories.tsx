import { Meta, Story } from '@storybook/react';
import { CelebritiesItem, CelebritiesItemProps } from './CelebritiesItem';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Atoms/CelebritiesItem',
  component: CelebritiesItem,
} as Meta;

const Template: Story<CelebritiesItemProps> = (args) => (
  <CelebritiesItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = mockData.celebrities.map((item) => ({
  ...item,
  img: require(`/src/assets/images/${item.img}`),
}))[0];
