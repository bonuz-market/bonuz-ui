import { Meta, Story } from "@storybook/react";
import { PhotoContainer,TPhotoContainer } from "./PhotoContainer";
import photo2_2 from './../../../../assets/images/photo2_2.png'

export default {
  title: "Components/Atoms/LpComponents/PhotoContainer",
  component: PhotoContainer
} as Meta<TPhotoContainer>;

const Template: Story<TPhotoContainer> = (args) =>
  <PhotoContainer {...args} />

export const Primary = Template.bind({});
Primary.args = {
  image:photo2_2,
  id:1
};
