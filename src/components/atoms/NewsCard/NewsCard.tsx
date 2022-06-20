import { FC } from 'react';
import './NewsCard.scss';

export type NewsCardProps = {
  created: string;
  img: string;
  title: string;
  description: string;
  link: string;
};

export const NewsCard: FC<React.PropsWithChildren<NewsCardProps>> = ({
  created,
  img,
  title,
  description,
  link,
}) => (
  <article className="post">
    <div className="date">{created}</div>
    <a className="img" href={link} target="_blank" rel="noreferrer">
      <div className="mask" />
      <div className="mask mask--gradient" />
      <img src={img} className="post-image" alt="" />
    </a>
    <h3>
      <a href={link} target="_blank" rel="noreferrer">
        {title}
      </a>
    </h3>
    <p>{description}</p>
  </article>
);
