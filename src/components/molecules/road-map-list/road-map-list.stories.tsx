import { Meta, Story } from '@storybook/react';
import { RoadMapList, RoadMapListProps } from './road-map-list';
import mockData from '../../../mock/mock-data.json';
import '../../atoms/road-map-item/road-map-wrapper.scss';

export default {
  title: 'Components/Molecules/RoadMapList',
  component: RoadMapList,
} as Meta;

const Template: Story<RoadMapListProps> = (args) => (
  <div id="roadmap">
    <div className="row" />
    <div className="row" style={{ display: 'flex' }}>
      <RoadMapList {...args} />
    </div>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  items: mockData.roadMap,
};
export const RTL = Template.bind({});
RTL.args = {
  items: [
    {
      title: 'ابريل 2021',
      description: 'الانطلق في أبريل',
    },
    {
      title: 'يوليو 2021',
      description: 'بذارة المجتمع الخاص',
    },
    {
      title: 'اغسطس 2021',
      description: '* الشراكات \n * فريق التوظيف \n * بدء تطوير منتجات MVP',
    },
    {
      title: 'سبتمبر 2021',
      description:
        '* فريق التسويق يبدأ العمل الرئيسي \n * Tech Tech Tech Recruitment \n and * Bonus Strategy Strategy Dev.\n و * عظام تحديث موقع جديد',
    },
    {
      title: 'أكتوبر 2021',
      description: '* إطلاق موقع الويب \n * MVP إطلاق',
    },
    {
      title: 'المستقبل',
      description: 'تحقق whitepaper للخطوات المتبقية.',
    },
  ],
  rtl: true,
};
