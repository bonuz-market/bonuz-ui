import { Meta, Story } from '@storybook/react';
import { PartnersList, PartnersListProps } from './PartnersList';
import mockdata from '../../../mock/mock-data.json';

export default {
  title: 'Components/Molecules/PartnersList',
  component: PartnersList,
} as Meta;

const Template: Story<PartnersListProps> = (args) => (
  <div style={{ margin: '5rem 0' }}>
    <PartnersList {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  items: mockdata.partners.map((item) => ({
    image: require(`/src/assets/images/${item}`),
    link: 'https://bonuz.market',
  })),
};
