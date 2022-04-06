
import { Meta, Story } from '@storybook/react';
import { IconBlueContainer, IconBlueContainerProps } from './IconBlueContainer';
import Telegram from "../../../../assets/icons/Telegram";

export default {
  title: 'Components/Atoms/LpComponents/IconBlueContainer',
  component: IconBlueContainer,
} as Meta;

const Template: Story<IconBlueContainerProps> = (args) => <IconBlueContainer {...args} > <Telegram/></IconBlueContainer>;

export const Primary = Template.bind({});
Primary.args = {
  href:'https://web.telegram.org',
};
