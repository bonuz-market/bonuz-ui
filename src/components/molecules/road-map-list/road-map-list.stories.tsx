import { Meta, Story } from '@storybook/react';
import { RoadMapList, RoadMapListProps } from './road-map-list';
import mockData from '../../../mock/mock-data.json';
import '../../atoms/road-map-item/road-map-wrapper.scss';

export default {
  title: 'Components/Molecules/RoadMapList',
  component: RoadMapList,
} as Meta;

const Template: Story<RoadMapListProps> = (args) => (
  <div id="six">
    <div className="row" />
    <div className="row" style={{ display: 'flex' }}>
      <RoadMapList {...args} />
    </div>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  items: mockData.roadMap,
};
