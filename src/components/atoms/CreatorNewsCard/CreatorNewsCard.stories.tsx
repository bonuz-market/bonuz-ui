import { Meta, Story } from '@storybook/react';
import { CreatorNewsCard, CreatorNewsCardProps } from './CreatorNewsCard';

export default {
  title: 'Components/Atoms/CreatorNewsCard',
  component: CreatorNewsCard,
} as Meta;

const Template: Story<CreatorNewsCardProps> = (args) => (
  <CreatorNewsCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  img: 'https://via.placeholder.com/320x180',
  created: '2 hours ago',
  tag: '#themeofnews',
  title: 'Sales professionals lorem ipsum dolor sit amet',
  description:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  type: 'main',
};
