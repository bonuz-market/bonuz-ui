import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from './Modal';

export default {
  title: 'Components/Atoms/Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args}></Modal>;

export const Primary = Template.bind({});
Primary.args = {
  closeText: 'Close | ✕',
  footer: {
    text: 'REGISTER AND BECOME PART OF THE $BONUZ TOKEN LAUNCH!',
    link: 'https://bonuz.market/',
  },
  video: true,
  children: (
    <iframe
      title="video"
      src="https://www.youtube.com/embed/NTaIzbQaB3s"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  ),
};
export const Secondary = Template.bind({});
Secondary.args = {
  closeText: 'Close | ✕',
  footer: { text: 'REGISTER AND BECOME PART OF THE $BONUZ TOKEN LAUNCH!' },
  children: <div>Im a Model!</div>,
};
