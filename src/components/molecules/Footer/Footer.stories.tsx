import { Meta, Story } from '@storybook/react';
import { Navigation } from '../../atoms';
import { Footer, FooterProps } from './Footer';

export default {
  title: 'Components/Layout/Footer',
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  logo: (
    <img
      src="https://bonuz.market/wp-content/themes/blankslate/p/logo/bonuz_logo.png"
      className="logo"
      alt=""
    />
  ),
  navigation: (
    <div className="navigation">
      <div>
        <p>Test</p>
        <Navigation>
          <a key={1} href="#how-it-works">
            How it works
          </a>
          <a key={2} href="#how-it-works">
            How it works
          </a>
          <a key={3} href="#how-it-works">
            How it works
          </a>
          <a key={4} href="#how-it-works">
            How it works
          </a>
          <a key={5} href="#how-it-works">
            How it works
          </a>
          <a key={6} href="#how-it-works">
            How it works
          </a>
        </Navigation>
      </div>
      <div>
        <p>Test</p>
        <Navigation>
          <a key={1} href="#how-it-works">
            How it works
          </a>
          <a key={2} href="#how-it-works">
            How it works
          </a>
          <a key={3} href="#how-it-works">
            How it works
          </a>
          <a key={4} href="#how-it-works">
            How it works
          </a>
          <a key={5} href="#how-it-works">
            How it works
          </a>
          <a key={6} href="#how-it-works">
            How it works
          </a>
        </Navigation>
      </div>{' '}
      <div>
        <p>Test</p>
        <Navigation>
          <a key={1} href="#how-it-works">
            How it works
          </a>
          <a key={2} href="#how-it-works">
            How it works
          </a>
          <a key={3} href="#how-it-works">
            How it works
          </a>
          <a key={4} href="#how-it-works">
            How it works
          </a>
          <a key={5} href="#how-it-works">
            How it works
          </a>
          <a key={6} href="#how-it-works">
            How it works
          </a>
        </Navigation>
      </div>
    </div>
  ),

  sideText: 'A space for creators to BONUZ your fans with exclusive content',
  buttons: [{ text: 'Contact us' }, { text: 'Privacy policy', outline: true }],
  privacyPolicy: { text: 'Privacy policy', link: 'https://bonuz.market' },
  newsletterForm: {
    label: 'Subscribe to our newsletter',
    placeholderText: 'Enter your email',
    onSubmit: () => {},
    statusTextOptions: {
      message: 'This is a success message, it disappear after 5 seconds',
      type: 'success',
    },
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
