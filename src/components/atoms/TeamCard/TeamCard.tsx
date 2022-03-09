import classNames from 'classnames';
import { FC } from 'react';
import './TeamCard.scss';

export type TeamCardProps = {
  img: string;
  name: string;
  position: string;
  link?: string;
  rounded?: boolean;
  centered?: boolean;
};

export const TeamCard: FC<TeamCardProps> = ({
  img,
  name,
  position,
  link,
  rounded,
  centered,
}) => (
  <div
    className={classNames('team-item', {
      rounded,
      centered,
    })}
  >
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
