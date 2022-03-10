import { FC } from 'react';
import { Button } from '../Button';
import './CelebritiesItem.scss';

export type CelebritiesItemProps = {
  img: string;
  name: string;
  role: string;
  link?: string;
};
const Item: FC<CelebritiesItemProps> = ({ img, name, role, link }) => (
  <>
    <img src={img} alt={name} />
    <div>
      <div className="celeb__info">
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
      {link && (
        <button type="button">
          <a href={link}>Celebrity </a>
        </button>
      )}
    </div>
  </>
);

export const CelebritiesItem: FC<CelebritiesItemProps> = ({
  img,
  name,
  role,
  link,
}) => (
  <div className="celeb">
    <Item img={img} name={name} role={role} link={link} />
  </div>
);
