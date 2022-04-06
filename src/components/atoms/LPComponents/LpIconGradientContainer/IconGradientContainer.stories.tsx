import { Meta, Story } from "@storybook/react";
import { IconGradientContainer } from "./IconGradientContainer";
import Telegram from "../../../../assets/icons/Telegram";

export default {
  title: "Components/Atoms/LpComponents/IconGradientContainer",
  component: IconGradientContainer
} as Meta<typeof IconGradientContainer>;

const Template: Story<typeof IconGradientContainer> = (args) =>
  <IconGradientContainer {...args} >
    <Telegram />
  </IconGradientContainer>;

export const Primary = Template.bind({});
Primary.args = {
  href: "https://web.telegram.org"
};
