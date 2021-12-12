import { FC } from 'react';
import './team-card.scss';

export type TeamCardProps = {
  img: string;
  name: string;
  position: string;
  link: string;
};

export const TeamCard: FC<TeamCardProps> = ({ img, name, position, link }) => (
  <div className="item">
    <img src={img} className="pic" alt="" />
    <p>{name}</p>
    <span>
      <a href={link}>{position}</a>
    </span>
  </div>
);
