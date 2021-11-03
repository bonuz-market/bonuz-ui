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
      <img src="/assets/images/post-mask.svg" className="mask" alt="" />
      <img
        src="/assets/images/post-mask--gradient.svg"
        className="mask mask--gradient"
        alt=""
      />
      <img src={img} className="post-image" alt="" />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="read-more">
      <img src="/assets/images/read.svg" alt="" />
      <span>Read More</span>
    </a>
  </article>
);
