import { Meta, Story } from "@storybook/react";
import { CardRaisePolygon,ICardRaisePolygon } from "./CardRaisePolygon";
import photo2_2 from './../../../../assets/images/photo2_2.png'

export default {
  title: "Components/Molecules/LpComponents/CardRaisePolygon",
  component: CardRaisePolygon
} as Meta<ICardRaisePolygon>;

const Template: Story<ICardRaisePolygon> = (args) =>
  <CardRaisePolygon {...args} />

export const Primary = Template.bind({});
Primary.args = {
  image: photo2_2,
  titleName: 'Vin Diesel',
  subTitleName: '$BCMC',
  links:{
    twitter:'https://twitter.com',
    medium:'https://medium.com',
    instagram:'https://www.instagram.com',
    telegram:'https://web.telegram.org',
  },
  raise:{
    total:'Total raise',
    totalRaise: '$203 000',
    personalAlocation: 'Personal Alocation ',
    personalAlocationRaise: '$542 000',
  },
  id:1
};