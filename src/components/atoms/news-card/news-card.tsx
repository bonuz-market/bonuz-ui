import { FC } from 'react';
import './news-card.scss';

export type NewsCardProps = {
  created: string;
  img: string;
  title: string;
  description: string;
};

export const NewsCard: FC<NewsCardProps> = ({
  created,
  img,
  title,
  description,
}) => (
  <article className="post">
    <div className="date">{created}</div>
    <a className="img" href="#">
      <div className="mask" />
      <div className="mask mask--gradient" />
      <img src={img} className="post-image" alt="" />
    </a>
    <h3>{title}</h3>
    <p>{description}</p>
  </article>
);
