import { Meta, Story } from '@storybook/react';
import { RoadMapItem, RoadMapItemProps } from './road-map-item';
import mockData from '../../../mock/mock-data.json';
import './road-map-wrapper.scss';

export default {
  title: 'Components/Atoms/RoadMapItem',
  component: RoadMapItem,
} as Meta;

const Template: Story<RoadMapItemProps> = (args) => (
  <div id="six">
    <div className="row" />
    <div className="row">
      <div className="slick-slide" style={{ display: 'block' }}>
        <RoadMapItem {...args} />
      </div>
    </div>
  </div>
);

export const Primary = Template.bind({});
Primary.args = mockData.roadMap[0];
