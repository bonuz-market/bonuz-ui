import { Meta, Story } from '@storybook/react';
import { ColorPicker, ColorPickerProps } from './ColorPicker';

export default {
  title: 'Components/Atoms/ColorPicker',
  component: ColorPicker,
} as Meta;

const Template: Story<ColorPickerProps> = (args) => <ColorPicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
