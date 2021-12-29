/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Dropdown } from './Dropdown';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Atoms/Dropdown/UnControlled',
  component: Dropdown,
  id: 'dropdown-uncontrolled',
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args}>
    {mockData.dropdown.map((item) => (
      <a href={`/${item.target}`} key={item.target}>
        {item.label}
      </a>
    ))}
  </Dropdown>
);

export const Primary = Template.bind({});

Primary.args = {
  selected: 'English',
};
