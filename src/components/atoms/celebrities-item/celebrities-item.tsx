import { FC } from 'react';
import './celebrities-item.scss';

export type CelebritiesItemProps = {
  img: string;
  name: string;
  role: string;
};

export const CelebritiesItem: FC<CelebritiesItemProps> = ({
  img,
  name,
  role,
}) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a className="celeb" href="#" draggable={false}>
    <img src={img} alt="" />
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  </a>
);
