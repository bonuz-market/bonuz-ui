import { FC } from 'react';
import './TeamCard.scss';

export type TeamCardProps = {
  img: string;
  name: string;
  position: string;
  link?: string;
};

export const TeamCard: FC<TeamCardProps> = ({ img, name, position, link }) => (
  <div className="team-item">
    <img src={img} className="pic" alt="" />
    <p>{name}</p>
    <span>
      {link && (
        <div>
          <a href={link}>{position}</a>
        </div>
      )}
      {!link && position}
    </span>
  </div>
);
