import { Meta, Story } from '@storybook/react';
import { NewsRow, NewsRowProps } from './NewsRow';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Molecules/NewsRow',
  component: NewsRow,
} as Meta;

const Template: Story<NewsRowProps> = (args) => (
  <div className="blogs">
    <NewsRow {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  news: mockData.news.map((item) => ({
    ...item,
    img: require(`/src/assets/images/${item.img}`),
  })),
};