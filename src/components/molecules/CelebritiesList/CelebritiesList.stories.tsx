import { Meta, Story } from '@storybook/react';
import { CelebritiesList, CelebritiesListProps } from './CelebritiesList';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Molecules/CelebritiesList',
  component: CelebritiesList,
} as Meta;

const Template: Story<CelebritiesListProps> = (args) => (
  <div className="celebrities__list">
    <CelebritiesList {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  celebrities: mockData.celebrities.map((item) => ({
    ...item,
    img: require(`/src/assets/images/${item.img}`),
    link: 'asdasd',
  })),
};
