import { FC } from 'react';

import './fan-item.scss';
import eyeIcon from '../../../assets/icons/eye.svg';
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
        <img src={eyeIcon} alt="" />
        {viewers}
      </span>
    </div>
  </li>
);
