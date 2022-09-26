import { Meta, Story } from '@storybook/react';
import { AccordionItem } from '../../atoms/AccordionItem/AccordionItem';
import { Accordion, AccordionProps } from './Accordion';

export default {
  title: 'Components/Molecules/Accordion',
  component: Accordion,
} as Meta;

const Template: Story<AccordionProps> = (args) => (
  <Accordion {...args}>
    <AccordionItem title="Bonuz Market">
      <p>
        Bonuz is a community focused and creator oriented blockchain-based
        turnkey solution for building and leveraging closer connections by
        rewarding all participants for their engagement (engage to earn).
      </p>
    </AccordionItem>
    <AccordionItem title="Bonuz Life">
      <p>
        A percentage of all the gains in the Bonuz Ecosystem will be donated to
        impactful charities. Bonuz will announce a livestream event hosted by
        our team and celebrities for the official launch of the Bonuz
        Foundation.
      </p>
      <p>
        Every $BONUZ token holder has the opportunity to votewhich charity
        organization receives donations from the Bonuz foundation.
      </p>
    </AccordionItem>
    <AccordionItem title="Bonuz Land">
      <p>
        We at Bonuz are building essential parts of the next digital era.
        Bonuz.Land is our metaverse - a virtual and augmented reality
        application hosting all types of users from our ecosystem.
      </p>
    </AccordionItem>
  </Accordion>
);

export const Primary: { args: AccordionProps } = Template.bind({});
