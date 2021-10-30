import { FC } from 'react';
import { AdvantagesItem } from '@/shared/ui/atoms';

export type AdvantagesListProps = {
  items: {
    title: string;
    description: string;
    icon: string;
    iconBlur: string;
  }[];
};

export const AdvantagesList: FC<AdvantagesListProps> = ({ items }) => (
  <div className="blocks">
    {items.map((item) => (
      <AdvantagesItem
        title={item.title}
        description={item.description}
        icon={item.icon}
        iconBlur={item.iconBlur}
      />
    ))}
  </div>
);
