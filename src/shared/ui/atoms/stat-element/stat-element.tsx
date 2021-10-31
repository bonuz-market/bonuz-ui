import { FC } from 'react';

export type StatElementProps = {
  img: string;
  title: string;
  description: string;
};

export const StatElement: FC<StatElementProps> = ({
  img,
  title,
  description,
}) => (
  <div className="block">
    <img src={img} alt="" className="gem" />
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);
