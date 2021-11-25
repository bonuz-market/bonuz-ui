import { Meta, Story } from '@storybook/react';
import { FansList, FansListProps } from './fans-list';

export default {
  title: 'Components/Molecules/FansList',
  component: FansList,
} as Meta;

const translations = {
  fans: 'Fans',
};

const Template: Story<FansListProps> = (args) => <FansList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  t: (key) => (translations as any)[key],
  fans: [
    {
      avatar: 'https://via.placeholder.com/62x62',
      name: 'Oliver Molnar',
      description:
        'Text example Text example Text example Text example Text example Text example',
      viewers: 200,
    },
    {
      avatar: 'https://via.placeholder.com/62x62',
      name: 'Oliver Molnar',
      description:
        'Text example Text example Text example Text example Text example Text example',
      viewers: 200,
    },
    {
      avatar: 'https://via.placeholder.com/62x62',
      name: 'Oliver Molnar',
      description:
        'Text example Text example Text example Text example Text example Text example',
      viewers: 200,
    },
    {
      avatar: 'https://via.placeholder.com/62x62',
      name: 'Oliver Molnar',
      description:
        'Text example Text example Text example Text example Text example Text example',
      viewers: 200,
    },
    {
      avatar: 'https://via.placeholder.com/62x62',
      name: 'Oliver Molnar',
      description:
        'Text example Text example Text example Text example Text example Text example',
      viewers: 200,
    },
    {
      avatar: 'https://via.placeholder.com/62x62',
      name: 'Oliver Molnar',
      description:
        'Text example Text example Text example Text example Text example Text example',
      viewers: 200,
    },
    {
      avatar: 'https://via.placeholder.com/62x62',
      name: 'Oliver Molnar',
      description:
        'Text example Text example Text example Text example Text example Text example',
      viewers: 200,
    },
    {
      avatar: 'https://via.placeholder.com/62x62',
      name: 'Oliver Molnar',
      description:
        'Text example Text example Text example Text example Text example Text example',
      viewers: 200,
    },
    {
      avatar: 'https://via.placeholder.com/62x62',
      name: 'Oliver Molnar',
      description:
        'Text example Text example Text example Text example Text example Text example',
      viewers: 200,
    },
    {
      avatar: 'https://via.placeholder.com/62x62',
      name: 'Oliver Molnar',
      description:
        'Text example Text example Text example Text example Text example Text example',
      viewers: 200,
    },
    {
      avatar: 'https://via.placeholder.com/62x62',
      name: 'Oliver Molnar',
      description:
        'Text example Text example Text example Text example Text example Text example',
      viewers: 200,
    },
    {
      avatar: 'https://via.placeholder.com/62x62',
      name: 'Oliver Molnar',
      description:
        'Text example Text example Text example Text example Text example Text example',
      viewers: 200,
    },
    {
      avatar: 'https://via.placeholder.com/62x62',
      name: 'Oliver Molnar',
      description:
        'Text example Text example Text example Text example Text example Text example',
      viewers: 200,
    },
    {
      avatar: 'https://via.placeholder.com/62x62',
      name: 'Oliver Molnar',
      description:
        'Text example Text example Text example Text example Text example Text example',
      viewers: 200,
    },
    {
      avatar: 'https://via.placeholder.com/62x62',
      name: 'Oliver Molnar',
      description:
        'Text example Text example Text example Text example Text example Text example',
      viewers: 200,
    },
  ],
};
