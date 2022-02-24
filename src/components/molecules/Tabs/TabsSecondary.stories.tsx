import { Meta, Story } from '@storybook/react';
import classNames from 'classnames';
import { useState } from 'react';
import { TabsSecondary } from './TabsSecondary';

export default {
  title: 'Components/Molecules/Tabs/Secondary',
  component: TabsSecondary,
} as Meta;

const Template: Story = (args) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <TabsSecondary>
      {args.items.map((month, index) => (
        <li key={month}>
          <a
            className={classNames({ active: activeTab === index })}
            onClick={() => setActiveTab(index)}
          >
            {month}
          </a>
        </li>
      ))}
    </TabsSecondary>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  items: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
};
