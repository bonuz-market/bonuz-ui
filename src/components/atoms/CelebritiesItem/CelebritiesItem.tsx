import { FC } from 'react';
import './CelebritiesItem.scss';

export type CelebritiesItemProps = {
  img: string;
  name: string;
  role: string;
  link?: string;
};

export const CelebritiesItem: FC<CelebritiesItemProps> = ({
  img,
  name,
  role,
  link,
}) => (
  <a className="celeb" href={link}>
    <img src={img} alt={name} />
    <div>
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  </a>
);
