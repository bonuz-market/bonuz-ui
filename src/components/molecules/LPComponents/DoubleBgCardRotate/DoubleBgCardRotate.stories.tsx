import { Meta, Story } from "@storybook/react";
import { DoubleBgCardRotate, IDoubleBgCardRotate } from "./DoubleBgCardRotate";
import Heiko from "./../../../../assets/images/Heiko.png";

export default {
  title: "Components/Molecules/LpComponents/DoubleBgCardRotate",
  component: DoubleBgCardRotate
} as Meta<IDoubleBgCardRotate>;

const Template: Story<IDoubleBgCardRotate> = (args) =>
  <DoubleBgCardRotate {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: Heiko,
  title: "Celebrity",
  subtitle: "Actor, Artist",
  buttonTitle: "Coming Soon"
};
export const Left = Template.bind({});
Left.args = {
  image: Heiko,
  title: "Celebrity",
  subtitle: "Actor, Artist",
  buttonTitle: "Coming Soon",
  left: true
};
export const Right = Template.bind({});
Right.args = {
  image: Heiko,
  title: "Celebrity",
  subtitle: "Actor, Artist",
  buttonTitle: "Coming Soon",
  right: true
};