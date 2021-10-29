import { Meta, Story } from '@storybook/react';
import { NewsCard, NewsCardProps } from './news-card';
import mockData from '@/shared/mock/mock-data.json';

export default {
  title: 'Components/Atoms/NewsCard',
  component: NewsCard,
} as Meta;

const Template: Story<NewsCardProps> = (args) => <NewsCard {...args} />;

export const Primary = Template.bind({});
Primary.args = mockData.news[0];
