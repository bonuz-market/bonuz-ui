import { Meta, Story } from '@storybook/react';
import { CalendarItem, CalendarItemProps } from './CalendarItem';
export default {
  title: 'Components/Atoms/CalendarItem',
  component: CalendarItem,
} as Meta;

const Template: Story<CalendarItemProps> = (args) => <CalendarItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Crypto Expo Dubai',
  date: '16.03.2022 - 17.03.2022',
  location: 'Festival Arena, Dubai Festival City',
  link: 'https://cryptoexpodubai.com/',
};
