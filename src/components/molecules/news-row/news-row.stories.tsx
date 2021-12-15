import { Meta, Story } from '@storybook/react';
import { NewsRow, NewsRowProps } from './news-row';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Molecules/NewsRow',
  component: NewsRow,
} as Meta;

const Template: Story<NewsRowProps> = (args) => (
  <div id="news">
    <div className="blogs">
      <NewsRow {...args} />
    </div>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  news: mockData.news,
};
