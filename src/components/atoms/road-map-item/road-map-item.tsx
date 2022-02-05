import { FC } from 'react';
import './road-map-item.scss';

export type RoadMapItemProps = {
  title: string;
  description: string;
};

export const RoadMapItem: FC<RoadMapItemProps> = ({ title, description }) => (
  <div className="roadmap__item">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="overlay" />
  </div>
);
