import { Meta, Story } from "@storybook/react";
import { DoubleBgCard,IDoubleBgCard } from "./DoubleBgCard";
import Heiko from './../../../../assets/images/Heiko.png'

export default {
  title: "Components/Molecules/LpComponents/DoubleBgCard",
  component: DoubleBgCard
} as Meta<IDoubleBgCard>;

const Template: Story<IDoubleBgCard> = (args) =>
  <DoubleBgCard {...args}/>

export const Primary = Template.bind({});
Primary.args = {
  image: Heiko,
  title:'Celebrity',
  subtitle:'Actor, Artist',
  buttonTitle:'Coming Soon'
};