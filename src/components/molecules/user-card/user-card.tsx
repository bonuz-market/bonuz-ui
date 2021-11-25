import { FC } from 'react';

import './user-card.scss';

export type UserCardProps = {
  photo: string;
  shortLink: string;
  created: string;
  addresses: {
    address: string;
    coins: number;
  }[];
  info: {
    firstName: string;
    lastName: string;
  };
  t: (key: string) => string;
};

export const UserCard: FC<UserCardProps> = ({
  photo,
  shortLink,
  created,
  addresses,
  info,
  t,
}) => (
  <div className="user-card">
    <div className="user-card__wrapper">
      <div className="user-card__photo">
        <div className="user-card__photo__wrapper">
          <div>
            <img
              src="/assets/icons/user-info-background.svg"
              alt=""
              className="user-card__photo__mask"
            />
            <img src={photo} alt="" className="user-card__photo__img" />
          </div>
        </div>
        <span className="user-card__photo__short-link">{shortLink}</span>
        <span className="user-card__photo__created">{created}</span>
      </div>
    </div>
    <div className="user-card__wrapper">
      <div className="user-card__addresses">
        <span className="user-card__addresses__title">{t('addresses')}</span>
        <ul className="user-card__addresses__list">
          {addresses.map((item) => (
            <li className="user-card__addresses__item">
              <span className="user-card__addresses__address">
                {item.address}
              </span>
              <span className="user-card__addresses__coins">
                <img src="/assets/icons/coin.svg" alt="" />
                {item.coins}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="user-card__info">
        <span className="user-card__info__title">{t('info')}</span>
        <div className="user-card__info__content">
          <div className="user-card__info__item">
            <span className="user-card__info__item__title">
              {t('firstName')}:{' '}
            </span>
            <span className="user-card__info__item__content">
              {info.firstName}
            </span>
          </div>
          <div className="user-card__info__item">
            <span className="user-card__info__item__title">
              {t('lastName')}:{' '}
            </span>
            <span className="user-card__info__item__content">
              {info.lastName}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
