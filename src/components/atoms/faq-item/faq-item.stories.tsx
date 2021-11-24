import { Meta, Story } from '@storybook/react';
import { FaqItem, FaqItemProps } from './faq-item';

export default {
  title: 'Components/Atoms/FaqItem',
  component: FaqItem,
} as Meta;

const Template: Story<FaqItemProps> = (args) => (
  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
    <FaqItem {...args} />
  </ul>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'What if and what then?',
  description:
    'We sent a mail to the following address with your username if it exists in our system.',
};
