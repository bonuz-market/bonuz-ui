/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import classNames from 'classnames';
import { Dropdown } from './Dropdown';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Atoms/Dropdown/Controlled',
  component: Dropdown,
  id: 'dropdown-controlled',
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <Dropdown {...args}>
      {mockData.dropdown.map((item, index) => (
        <a
          className={classNames({ selected: selectedIndex === index })}
          onClick={() => {
            setSelectedIndex(index);
          }}
          href={`/${item.target}`}
          key={item.target}
        >
          {item.label}
        </a>
      ))}
    </Dropdown>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  selected: 'English',
};
