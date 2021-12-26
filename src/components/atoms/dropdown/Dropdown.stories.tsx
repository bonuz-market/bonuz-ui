/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Dropdown } from './Dropdown';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Atoms/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  options: mockData.dropdown,
  selectedIndex: 2,
};
