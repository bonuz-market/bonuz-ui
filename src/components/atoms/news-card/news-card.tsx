import { FC } from 'react';

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
    <div className="img">
      <div className="mask" />
      <div className="mask mask--gradient" />
      <img src={img} className="post-image" alt="" />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="read-more">
      <div />
      <span>Read More</span>
    </a>
  </article>
);
