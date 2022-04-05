import { Meta, Story } from '@storybook/react';
import { TeamList, TeamListProps } from './TeamList';
import mockData from '../../../mock/mock-data.json';
import { Button } from '../../atoms';
import { useState } from 'react';

export default {
  title: 'Components/Molecules/TeamList',
  component: TeamList,
} as Meta;

const Template: Story<TeamListProps> = (args) => {
  const [showButton, setShowButton] = useState(false);
  return (
    <div className="team-list">
      <TeamList
        {...args}
        options={{
          onReachEnd: () => setShowButton(true),
          lazy: true,
        }}
      />
      {showButton && <Button>Join Team</Button>}
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  items: mockData.team.map((item) => ({
    ...item,
    img: require(`/src/assets/images/${item.img}`),
    rounded: true,
    centered: true,
  })),
};
