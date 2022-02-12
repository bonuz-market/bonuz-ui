import { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from './input';
import icon from '../../../assets/images/f_i.svg';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Subscribe to news:',
  placeholder: 'Enter you email',
  secondary: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Subscribe to news:',
  placeholder: 'Enter you email',
  secondary: true,
};

const SearchIcon: FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 19L16 16"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Search = Template.bind({});
Search.args = {
  placeholder: 'Search',
  secondary: true,
  icon: <SearchIcon />,
};

export const WithActionButton = Template.bind({});
WithActionButton.args = {
  label: 'Subscribe to news:',
  placeholder: 'Enter you email',
  actionButton: (
    <button type="button">
      <img src={icon} alt="" />
    </button>
  ),
};
