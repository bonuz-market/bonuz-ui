import { FC } from 'react';

export type FanItemProps = {
  avatar: string;
  name: string;
  description: string;
  viewers: number;
};

export const FanItem: FC<FanItemProps> = ({
  avatar,
  name,
  description,
  viewers,
}) => (
  <li className="fan-item">
    <div className="fan-item__wrapper">
      <img src={avatar} alt="" className="fan-item__photo" />
    </div>
    <div className="fan-item__wrapper">
      <span className="fan-item__name">{name}</span>
      <div className="fan-item__descr">{description}</div>
      <span className="fan-item__viewers">
        <img src="/assets/icons/eye.svg" alt="" />
        {viewers}
      </span>
    </div>
  </li>
);
