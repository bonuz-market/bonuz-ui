import { FC } from 'react';
import './news-card.scss';

export type NewsCardProps = {
  created: string;
  img: string;
  title: string;
  description: string;
  link: string;
};

export const NewsCard: FC<NewsCardProps> = ({
  created,
  img,
  title,
  description,
  link,
}) => (
  <article className="post">
    <div className="date">{created}</div>
    <a className="img" href={link}>
      <div className="mask" />
      <div className="mask mask--gradient" />
      <img src={img} className="post-image" alt="" />
    </a>
    <h3>
      <a href={link}>{title}</a>
    </h3>
    <p>{description}</p>
  </article>
);
