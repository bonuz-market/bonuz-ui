import { Meta, Story } from '@storybook/react';
import { Gallery, GalleryProps } from './Gallery';
import mockdata from '../../../mock/mock-data.json';

export default {
  title: 'Components/Molecules/Gallery',
  component: Gallery,
} as Meta;

const Template: Story<GalleryProps> = (args) => (
  <div style={{ margin: '5rem 0' }}>
    <Gallery {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  items: mockdata.partners.map((item) => ({
    image: require(`/src/assets/images/${item}`),
    link: 'https://bonuz.market',
  })),
};
