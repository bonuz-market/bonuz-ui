import { Meta, Story } from '@storybook/react';
import { CelebritiesList, CelebritiesListProps } from './celebrities-list';
import mockData from '../../../mock/mock-data.json';
import '../../atoms/celebrities-item/celebrities-wrapper.scss';

export default {
  title: 'Components/Molecules/CelebritiesList',
  component: CelebritiesList,
} as Meta;

const Template: Story<CelebritiesListProps> = (args) => (
  <div id="intro">
    <div className="celebs">
      <CelebritiesList {...args} />
    </div>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  celebrities: mockData.celebrities.map((item) => ({
    ...item,
    img: require(`/src/assets/images/${item.img}`),
  })),
};
