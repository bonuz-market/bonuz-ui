import { Meta, Story } from '@storybook/react';
import { NewsRow, NewsRowProps } from './news-row';
import mockData from '@/shared/mock/mock-data.json';

export default {
  title: 'Components/Molecules/NewsRow',
  component: NewsRow,
} as Meta;

const Template: Story<NewsRowProps> = (args) => (
  <div id="seven">
    <NewsRow {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  news: mockData.news,
};
