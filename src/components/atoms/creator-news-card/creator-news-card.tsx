import { FC } from 'react';
import classnames from 'classnames';

import './creator-news-card.scss';
import { cutText } from '../../../utils';

export type CreatorNewsCardProps = {
  img: string;
  title: string;
  description: string;
  tag: string;
  created: string;
  type?: 'main' | 'default';
};

export const CreatorNewsCard: FC<CreatorNewsCardProps> = ({
  img,
  title,
  description,
  tag,
  created,
  type = 'default',
}) => (
  <article
    className={classnames('creator-news-card', {
      'creator-news-card--main': type === 'main',
    })}
  >
    <div
      className="creator-news-card__photo__wrapper"
      style={{ backgroundImage: `url('${img}')` }}
    >
      <button type="button" className="creator-news-card__photo__share">
        <img src="/assets/icons/share.svg" alt="" />
      </button>
    </div>
    <div className="creator-news-card__content">
      <div className="creator-news-card__content__tag__wrapper">
        <span className="creator-news-card__content__tag">{tag}</span>
        <span className="creator-news-card__content__tag__created">
          {created}
        </span>
      </div>
      <span className="creator-news-card__content__title">
        {cutText(title, 32)}
      </span>
      <p className="creator-news-card__content__descr">{description}</p>
      <span className="creator-news-card__content__created">{created}</span>
    </div>
  </article>
);
