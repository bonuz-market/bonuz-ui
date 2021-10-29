import { FC } from 'react';
import { CelebritiesItem } from '@/shared/ui/atoms';

export type CelebritiesListProps = {
  celebrities: {
    img: string;
    name: string;
    country: string;
  }[];
};

export const CelebritiesList: FC<CelebritiesListProps> = ({ celebrities }) => (
  <div className="celebs-list">
    {celebrities.map((item) => (
      <CelebritiesItem img={item.img} name={item.name} country={item.country} />
    ))}
  </div>
);
