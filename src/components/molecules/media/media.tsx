import { FC } from 'react';

import './media.scss';
import { FanItem, FanItemProps } from '../../atoms/fan-item/fan-item';

export type MediaProps = {
  img: string;
  title: string;
  viewers: number;
  watermark: string;
  created: string;
  shortLink: string;
  city: string;
  t: (key: string) => string;
  meta: {
    shortcode: string;
    url: string;
  };
  fans: FanItemProps[];
};

export const Media: FC<MediaProps> = ({
  img,
  title,
  viewers,
  watermark,
  created,
  shortLink,
  city,
  meta,
  fans,
  t,
}) => (
  <div className="media">
    <div className="media__wrapper">
      <img src={img} alt="" className="media__photo" />
      <h3 className="media__title">{title}</h3>
      <div className="media__info">
        <div className="media__info__wrapper">
          <span className="media__info__item">
            <img src="/assets/icons/eye.svg" alt="" />
            {viewers}
          </span>
          <span className="media__info__item">
            <img src="/assets/icons/blobs.svg" alt="" />
            {watermark}
          </span>
        </div>
        <button type="button" className="media__info__edit">
          <img src="/assets/icons/edit.svg" alt="" />
        </button>
      </div>
      <span className="media__created">{created}</span>
      <div className="media__about">
        <span className="media__about__title">{t('tappable')}</span>
        <span className="media__about__link">
          <img src="/assets/icons/mail.svg" alt="" />
          {shortLink}
        </span>
        <span className="media__about__link">
          <img src="/assets/icons/map.svg" alt="" />
          {city}
        </span>
      </div>
      <div className="media__meta">
        <span className="media__meta__title">{t('meta')}</span>
        <div className="media__meta__item">
          <span className="media__meta__descr">{t('shortcode')}</span>
          <span className="media__meta__content media__meta__content--shortcode">
            {meta.shortcode}
          </span>
        </div>
        <div className="media__meta__item">
          <span className="media__meta__descr">{t('url')}</span>
          <a
            href={meta.url}
            target="_blank"
            rel="noreferrer"
            className="media__meta__content media__meta__content--url"
          >
            {meta.url}
          </a>
        </div>
      </div>
    </div>
    <div className="media__wrapper">
      <div className="media__fans">
        <span className="media__fans__title">
          {t('fans')}
          <span>{fans.length}</span>
        </span>
        <ul className="media__fans__list">
          {fans.map((item) => (
            <FanItem
              avatar={item.avatar}
              name={item.name}
              description={item.description}
              viewers={item.viewers}
            />
          ))}
        </ul>
      </div>
    </div>
  </div>
);
