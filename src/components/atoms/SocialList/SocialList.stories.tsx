import { Meta, Story } from '@storybook/react';
import { SocialList } from './SocialList';

export default {
  title: 'Components/Atoms/SocialList',
  component: SocialList,
} as Meta;

const Template: Story = (args) => <SocialList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  telegram: 'https://t.me/BonuzMarket',
  twitter: 'https://twitter.com/BonuzMarket',
  medium: 'https://bonuzmarket.medium.com/',
  telegramMessage: 'https://t.me/BonuzHQ',
  instagram: 'https://www.instagram.com/bonuzmarket',
  facebook: 'https://www.facebook.com/BonuzMarket',
};
