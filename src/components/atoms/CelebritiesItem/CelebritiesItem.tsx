import { FC } from 'react';
import './CelebritiesItem.scss';

export type CelebritiesItemProps = {
  img: string;
  name: string;
  role: string;
  link?: string;
};
const Item: FC<CelebritiesItemProps> = ({ img, name, role }) => (
  <>
    <img src={img} alt={name} />
    <div>
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  </>
);

export const CelebritiesItem: FC<CelebritiesItemProps> = ({
  img,
  name,
  role,
  link,
}) =>
  link ? (
    <a className="celeb" href={link}>
      <Item img={img} name={name} role={role} />
    </a>
  ) : (
    <div className="celeb">
      <Item img={img} name={name} role={role} />
    </div>
  );
