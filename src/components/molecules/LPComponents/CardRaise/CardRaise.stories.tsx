import { Meta, Story } from "@storybook/react";
import { CardRaise,ICardRaise } from "./CardRaise";
import Heiko from './../../../../assets/images/Heiko.png'

export default {
  title: "Components/Molecules/LpComponents/CardRaise",
  component: CardRaise
} as Meta<ICardRaise>;

const Template: Story<ICardRaise> = (args) =>
  <CardRaise {...args}/>

export const Primary = Template.bind({});
Primary.args = {
  image: Heiko,
  titleName: 'Heiko Lochmann',
  subTitleName: '$BCMC',
  buttonTitle: 'Coming Soon',
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
  }
};