/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { RoadMapItem } from '@/shared/ui/atoms/road-map-item';

export type RoadMapListProps = {
  items: { title: string; description: string }[];
};

export const RoadMapList: FC<RoadMapListProps> = ({ items }) => (
  <>
    {items.map((item, index) => (
      <div className="slick-slide">
        <RoadMapItem
          key={`${item.title}-${index}`}
          title={item.title}
          description={item.description}
        />
      </div>
    ))}
  </>
);
