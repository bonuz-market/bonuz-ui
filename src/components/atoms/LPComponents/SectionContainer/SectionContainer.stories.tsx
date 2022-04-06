import { Meta, Story } from "@storybook/react";
import { SectionContainer,SectionContainerProps } from "./SectionContainer";

export default {
  title: "Components/Atoms/LpComponents/SectionContainer",
  component: SectionContainer
} as Meta<SectionContainerProps>;

const Template: Story<SectionContainerProps> = (args) =>
  <SectionContainer {...args} >
    <h1>this is section container</h1>
  </SectionContainer>;

export const Primary = Template.bind({});
Primary.args = {
  className:'myClass'
};