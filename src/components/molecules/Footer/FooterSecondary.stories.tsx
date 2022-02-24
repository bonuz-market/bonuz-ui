import { Meta, Story } from '@storybook/react';
import { FooterSecondary, FooterSecondaryProps } from './FooterSecondary';

export default {
  title: 'Components/Layout/Footer/Secondary',
  component: FooterSecondary,
} as Meta;

const Template: Story<FooterSecondaryProps> = (args) => (
  <FooterSecondary {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  logo: require('../../../assets/images/footer-logo.svg'),
  description: 'Description',
  socialMediaLinks: {
    telegram: 'https://t.me/BonuzMarket',
    twitter: 'https://twitter.com/BonuzMarket',
    medium: 'https://bonuzmarket.medium.com/',
    telegramMessage: 'https://t.me/BonuzHQ',
    instagram: 'https://www.instagram.com/bonuzmarket',
    facebook: 'https://www.facebook.com/BonuzMarket',
  },
};
