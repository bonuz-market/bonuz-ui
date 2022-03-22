import { Meta, Story } from '@storybook/react';
import { TeamCard, TeamCardProps } from './TeamCard';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Atoms/TeamCard',
  component: TeamCard,
} as Meta;

const Template: Story<TeamCardProps> = (args) => (
  <div id="army">
    <div className="team">
      <TeamCard {...args} />
    </div>
  </div>
);

export const Primary = Template.bind({});
Primary.args = mockData.team.map((item) => ({
  ...item,
  img: require(`/src/assets/images/${item.img}`),
}))[0];

export const Rounded = Template.bind({});
Rounded.args = mockData.team.map((item) => ({
  ...item,
  img: require(`/src/assets/images/${item.img}`),
  rounded: true,
}))[0];
export const Centered = Template.bind({});
Centered.args = mockData.team.map((item) => ({
  ...item,
  img: require(`/src/assets/images/${item.img}`),
  centered: true,
}))[0];
export const RoundedCentered = Template.bind({});
RoundedCentered.args = mockData.team.map((item) => ({
  ...item,
  img: require(`/src/assets/images/${item.img}`),
  centered: true,
  rounded: true,
}))[0];
