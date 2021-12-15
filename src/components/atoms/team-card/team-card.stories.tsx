import { Meta, Story } from '@storybook/react';
import { TeamCard, TeamCardProps } from './team-card';
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
Primary.args = mockData.team[0];
