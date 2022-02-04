import { Meta, Story } from '@storybook/react';
import { CelebritiesList, CelebritiesListProps } from './celebrities-list';
import mockData from '../../../mock/mock-data.json';
import './celebrities-list.scss';

export default {
  title: 'Components/Molecules/CelebritiesList',
  component: CelebritiesList,
} as Meta;

const Template: Story<CelebritiesListProps> = (args) => (
  <CelebritiesList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  celebrities: mockData.celebrities.map((item) => ({
    ...item,
    img: require(`/src/assets/images/${item.img}`),
  })),
};
