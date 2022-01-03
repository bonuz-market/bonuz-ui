import { Meta, Story } from '@storybook/react';
import { Dropdown } from '../../atoms';
import { Header } from './header';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Layout/Header',
  component: Header,
} as Meta;
const Template: Story = (args) => (
  <div style={{ height: '200vh' }}>
    <Header
      {...args}
      LanguageSelector={
        <Dropdown>
          {mockData.dropdown.map((item) => (
            <a href={`/${item.target}`} key={item.target}>
              {item.label}
            </a>
          ))}
        </Dropdown>
      }
      NavigationElements={[
        <a key={1} href="#how-it-works">
          How it works
        </a>,
        <a key={2} href="#how-it-works">
          How it works
        </a>,
        <a key={3} href="#how-it-works">
          How it works
        </a>,
        <a key={4} href="#how-it-works">
          How it works
        </a>,
        <a key={5} href="#how-it-works">
          How it works
        </a>,
        <a key={6} href="#how-it-works">
          How it works
        </a>,
      ]}
      signInElement={
        <a className="sign-in" href="#sign-in">
          Sign in
        </a>
      }
    />
  </div>
);

export const Primary = Template.bind({});
