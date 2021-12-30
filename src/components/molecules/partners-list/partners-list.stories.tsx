import { Meta, Story } from '@storybook/react';
import { PartnersList, PartnersListProps } from './partners-list';
import mockData from '../../../mock/mock-data.json';

export default {
  title: 'Components/Molecules/PartnersList',
  component: PartnersList,
} as Meta;

const Template: Story<PartnersListProps> = (args) => (
  <div id="partners">
    <PartnersList {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  partners: mockData.partners.map((item) =>
    require(`/src/assets/images/${item}`),
  ),
};
