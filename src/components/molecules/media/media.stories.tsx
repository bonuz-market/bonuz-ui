import { Meta, Story } from '@storybook/react';
import { Media, MediaProps } from './Media';

export default {
  title: 'Components/Molecules/Media',
  component: Media,
} as Meta;

const Template: Story<MediaProps> = (args) => <Media {...args} />;

const translations = {
  tappable: 'Tappable Objects',
  meta: 'Meta Data',
  shortcode: 'Shortcode:',
  url: 'URL:',
};

export const Primary = Template.bind({});
Primary.args = {
  img: 'https://via.placeholder.com/320x180',
  title: 'Media #54321',
  viewers: 200,
  watermark: 'bonuz',
  created: '28-01-2021 4:30pm',
  shortLink: 'Olivermolnar',
  city: 'Simbabwe',
  t: (key) => (translations as any)[key],
  meta: {
    shortcode: 'Shortcode',
    url: 'https://lorem-ipsum-dolor.sit-amet.tld',
  },
};
