import { Meta, Story } from '@storybook/react';
import { AccordionItem, AccordionItemProps } from './AccordionItem';

export default {
  title: 'Components/Atoms/AccordionItem',
  component: AccordionItem,
  parameters: { actions: { argTypesRegex: null } },
} as Meta;

const Template: Story<AccordionItemProps> = (args) => (
  <AccordionItem {...args} />
);

export const Left: { args: AccordionItemProps } = Template.bind({});
Left.args = {
  title: 'AccordionItem Title',
  children: 'AccordionItem Content',
};
