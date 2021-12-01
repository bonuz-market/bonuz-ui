import { FC } from 'react';

import './user-info.scss';

export type UserInfoProps = {
  avatar: string;
  name: string;
  balance: number;
  followers: string;
  posts: string;
};

export const UserInfo: FC<UserInfoProps> = ({
  avatar,
  name,
  balance,
  followers,
  posts,
}) => (
  <div className="user-info">
    <div className="user-info__photo__wrapper">
      <img src={avatar} alt="" className="user-info__photo" />
      <img
        src="/assets/icons/user-info-background.svg"
        alt=""
        className="user-info__photo__mask"
      />
    </div>
    <div className="user-info__content">
      <span className="user-info__content__name">{name}</span>
      <div className="user-info__content__wrapper">
        <span className="user-info__content__info user-info__content__info--balance">
          <img src="/assets/icons/coin.svg" alt="" />
          {balance}
        </span>
        <span className="user-info__content__info user-info__content__info--followers">
          <img src="/assets/icons/users.svg" alt="" />
          {followers}
        </span>
        <span className="user-info__content__info user-info__content__info--posts">
          <img src="/assets/icons/images.svg" alt="" />
          {posts}
        </span>
      </div>
    </div>
  </div>
);
