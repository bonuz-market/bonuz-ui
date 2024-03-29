import { FC } from 'react';
import './RoadMapItem.scss';

export type RoadMapItemProps = {
  title: string;
  description: string;
};

export const RoadMapItem: FC<React.PropsWithChildren<RoadMapItemProps>> = ({ title, description }) => (
  <div className="roadmap__item">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="overlay" />
  </div>
);
