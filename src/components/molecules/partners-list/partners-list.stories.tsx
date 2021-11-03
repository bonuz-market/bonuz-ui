import { Meta, Story } from '@storybook/react';
import { PartnersList } from './partners-list';

export default {
  title: 'Components/Molecules/PartnersList',
  component: PartnersList,
} as Meta;

const Template: Story = (args) => (
  <div id="ten">
    <PartnersList {...args} />
  </div>
);

export const Primary = Template.bind({});
