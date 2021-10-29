import { FC } from 'react';
import { HowItWorksItem } from '@/shared/ui/atoms';

export type HowItWorksListProps = {
  items: {
    img: string;
    title: string;
    circleOffset: number;
  }[];
};

export const HowItWorksList: FC<HowItWorksListProps> = ({ items }) => (
  <div className="blocks pc">
    {items.map((item) => (
      <HowItWorksItem
        img={item.img}
        title={item.title}
        circleOffset={item.circleOffset}
      />
    ))}
  </div>
);
