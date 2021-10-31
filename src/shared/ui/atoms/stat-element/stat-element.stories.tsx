import { Meta, Story } from '@storybook/react';
import { StatElement, StatElementProps } from './stat-element';
import mockData from '@/shared/mock/mock-data.json';

export default {
  title: 'Components/Atoms/StatElement',
  component: StatElement,
} as Meta;

const Template: Story<StatElementProps> = (args) => (
  <div id="eight">
    <div className="row">
      <div className="col">
        <div className="blocks">
          <StatElement {...args} />
        </div>
      </div>
    </div>
  </div>
);

export const Primary = Template.bind({});
Primary.args = mockData.statistic[0];
