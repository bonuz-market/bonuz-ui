import { FC } from 'react';
import './team-card.scss';

export type TeamCardProps = {
  img: string;
  name: string;
  position: string;
};

export const TeamCard: FC<TeamCardProps> = ({ img, name, position }) => (
  <div className="item">
    <img src={img} className="pic" alt="" />
    <p>{name}</p>
    <span>{position}</span>
  </div>
);
