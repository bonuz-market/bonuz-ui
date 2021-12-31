import { Meta, Story } from '@storybook/react';
import { NewsCard, NewsCardProps } from './news-card';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Atoms/NewsCard',
  component: NewsCard,
} as Meta;

const Template: Story<NewsCardProps> = (args) => <NewsCard {...args} />;

export const Primary = Template.bind({});
Primary.args = mockData.news.map((item) => ({
  ...item,
  img: require(`/src/assets/images/${item.img}`),
}))[0];
