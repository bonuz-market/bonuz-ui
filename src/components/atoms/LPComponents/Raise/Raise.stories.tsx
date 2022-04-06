import { Meta, Story } from "@storybook/react";
import { Raise,TRaise } from "./Raise";

export default {
  title: "Components/Atoms/LpComponents/Raise",
  component: Raise
} as Meta<TRaise>;

const Template: Story<TRaise> = (args) =>
  <div style={{ width: "327px" }}>
      <Raise {...args} />
  </div>


export const Primary = Template.bind({});
Primary.args = {
  total:'Total raise',
  totalRaise: '$203 000',
  personalAlocation: 'Personal Alocation ',
  personalAlocationRaise: '$542 000',
};
