import { Meta, Story } from '@storybook/react';
import { HeaderSecondary, HeaderSecondaryProps } from './HeaderSecondary';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Layout/Header/Secondary',
  component: HeaderSecondary,
} as Meta;
const Template: Story<HeaderSecondaryProps> = (args) => (
  <HeaderSecondary {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  logo: require('../../../assets/images/logo.svg'),
  description: 'Description',
  navText: 'Back',
};
