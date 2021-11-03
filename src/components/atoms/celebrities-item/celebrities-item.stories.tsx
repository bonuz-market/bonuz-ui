import { Meta, Story } from '@storybook/react';
import { CelebritiesItem, CelebritiesItemProps } from './celebrities-item';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Atoms/CelebritiesItem',
  component: CelebritiesItem,
} as Meta;

const Template: Story<CelebritiesItemProps> = (args) => (
  <div className="celebs">
    <div className="celebs-list">
      <CelebritiesItem {...args} />
      <CelebritiesItem {...args} />
    </div>
  </div>
);

export const Primary = Template.bind({});
Primary.args = mockData.celebrities[0];
