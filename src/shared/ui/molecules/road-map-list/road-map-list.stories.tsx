import { Meta, Story } from '@storybook/react';
import { RoadMapList, RoadMapListProps } from './road-map-list';
import mockData from '@/shared/mock/mock-data.json';

export default {
  title: 'Components/Molecules/RoadMapList',
  component: RoadMapList,
} as Meta;

const Template: Story<RoadMapListProps> = (args) => (
  <>
    <h1 style={{ color: '#FFFFFF' }}>TODO прикрутить слайдер</h1>
    <div id="six">
      <div className="row" />
      <div className="row" style={{ display: 'flex' }}>
        <RoadMapList {...args} />
      </div>
    </div>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  items: mockData.roadMap,
};
