import { Meta, Story } from '@storybook/react';
import { PartnersList, PartnersListProps } from './partners-list';
import mockdata from '../../../mock/mock-data.json';

export default {
  title: 'Components/Molecules/PartnersList',
  component: PartnersList,
} as Meta;

const Template: Story<PartnersListProps> = (args) => (
  <div className="partners-block">
    <PartnersList {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  partners: mockdata.partners.map((item) =>
    require(`/src/assets/images/${item}`),
  ),
};
