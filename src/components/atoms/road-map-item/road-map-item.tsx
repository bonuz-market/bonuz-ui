import { FC } from 'react';

export type RoadMapItemProps = {
  title: string;
  description: string;
};

export const RoadMapItem: FC<RoadMapItemProps> = ({ title, description }) => (
  <div className="slide">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="overlay" />
  </div>
);
