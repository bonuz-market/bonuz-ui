import { Meta, Story } from '@storybook/react';
import { TeamList, TeamListProps } from './team-list';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Molecules/TeamList',
  component: TeamList,
} as Meta;

const Template: Story<TeamListProps> = (args) => (
  <div className="team-list">
    <TeamList {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  items: mockData.team.map((item) => ({
    ...item,
    img: require(`/src/assets/images/${item.img}`),
  })),
};
