import { FC } from 'react';

import './UserInfo.scss';
import userImageMask from '../../../assets/icons/user-info-background.svg';
import coinIcon from '../../../assets/icons/coin.svg';
import followersIcon from '../../../assets/icons/users.svg';
import postsIcon from '../../../assets/icons/images.svg';

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
      <img src={userImageMask} alt="" className="user-info__photo__mask" />
    </div>
    <div className="user-info__content">
      <span className="user-info__content__name">{name}</span>
      <div className="user-info__content__wrapper">
        <span className="user-info__content__info user-info__content__info--balance">
          <img src={coinIcon} alt="" />
          {balance}
        </span>
        <span className="user-info__content__info user-info__content__info--followers">
          <img src={followersIcon} alt="" />
          {followers}
        </span>
        <span className="user-info__content__info user-info__content__info--posts">
          <img src={postsIcon} alt="" />
          {posts}
        </span>
      </div>
    </div>
  </div>
);
