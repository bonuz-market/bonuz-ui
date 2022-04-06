import { Meta, Story } from "@storybook/react";
import { SocialListBlue,SocialListBlueProps } from "./SocialListBlue";

export default {
  title: "Components/Molecules/LpComponents/SocialListBlue",
  component: SocialListBlue
} as Meta<SocialListBlueProps>;

const Template: Story<SocialListBlueProps> = (args) =>
  <SocialListBlue {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    twitter:'https://twitter.com',
    medium:'https://medium.com',
    instagram:'https://www.instagram.com',
    telegram:'https://web.telegram.org',
};