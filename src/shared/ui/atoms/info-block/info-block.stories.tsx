import { Meta, Story } from '@storybook/react';
import { InfoBlock, InfoBlockPropsWithChildren } from './info-block';
import { Button } from '@/shared/ui/atoms';

export default {
  title: 'Components/Atoms/InfoBlock',
  component: InfoBlock,
} as Meta;

const Template: Story<InfoBlockPropsWithChildren> = (args) => (
  <InfoBlock {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  size: 'small',
  children: (
    <>
      <Button>Join Early Birds</Button>
      <p>and be the first to get early access to the MVP Bonuz platform.</p>
    </>
  ),
};
