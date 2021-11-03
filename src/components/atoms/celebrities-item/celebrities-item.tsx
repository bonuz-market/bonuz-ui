import { FC } from 'react';

export type CelebritiesItemProps = {
  img: string;
  name: string;
  country: string;
};

export const CelebritiesItem: FC<CelebritiesItemProps> = ({
  img,
  name,
  country,
}) => (
  <a className="celeb" href="#">
    <img src={img} alt="" />
    <div>
      <h3>{name}</h3>
      <p>{country}</p>
    </div>
  </a>
);