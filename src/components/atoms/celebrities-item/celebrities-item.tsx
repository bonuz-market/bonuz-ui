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
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a className="celeb" href="#">
    <img src={img} alt="" />
    <div>
      <h3>{name}</h3>
      <p>{country}</p>
    </div>
  </a>
);
