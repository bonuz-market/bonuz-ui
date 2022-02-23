import { Meta, Story } from '@storybook/react';
import { Table, TableProps } from './Table';

export default {
  title: 'Components/Molecules/Table',
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  columns: [
    {
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Age',
      key: 'age',
    },
  ],
  data: [
    {
      name: 'Sergey aaaaaaaaaaaaaa',
      age: '18',
    },
    {
      name: 'Ivan',
      age: '25',
    },
  ],
  actionButton: <img src="/assets/icons/trash.svg" alt="" />,
  selectable: true,
};
