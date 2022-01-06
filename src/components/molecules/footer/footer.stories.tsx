import { Meta, Story } from '@storybook/react';
import { Footer } from './footer';
import { SocialListProps } from '../../atoms/social-list/social-list';

type NavigationProps = {
  title: string;
  NavigationElements: React.ReactElement[];
};
type FooterProps = {
  navigation: NavigationProps;
  sideText: string;
  buttons?: { text: string; outline?: boolean; link?: string }[];

  privacyPolicy?: { text: string; link: string };
  newsletterForm: {
    label: string;
    placeholderText: string;
    onSubmit: () => void;
  };
  socialMediaLinks: SocialListProps;
};
export default {
  title: 'Components/Layout/Footer',
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  navigation: {
    title: 'Navigation',
    NavigationElements: [
      <a key={1} href="#how-it-works">
        How it works
      </a>,
      <a key={2} href="#how-it-works">
        How it works
      </a>,
      <a key={3} href="#how-it-works">
        How it works
      </a>,
      <a key={4} href="#how-it-works">
        How it works
      </a>,
      <a key={5} href="#how-it-works">
        How it works
      </a>,
      <a key={6} href="#how-it-works">
        How it works
      </a>,
    ],
  },
  sideText: 'A space for creators to BONUZ your fans with exclusive content',
  buttons: [{ text: 'Contact us' }, { text: 'Privacy policy', outline: true }],
  privacyPolicy: { text: 'Privacy policy', link: 'https://bonuz.market' },
  newsletterForm: {
    label: 'Subscribe to our newsletter',
    placeholderText: 'Enter your email',
    onSubmit: () => {},
  },
  socialMediaLinks: {
    telegram: 'https://t.me/BonuzMarket',
    twitter: 'https://twitter.com/BonuzMarket',
    medium: 'https://bonuzmarket.medium.com/',
    telegramMessage: 'https://t.me/BonuzHQ',
    instagram: 'https://www.instagram.com/bonuzmarket',
    facebook: 'https://www.facebook.com/BonuzMarket',
  },
};
