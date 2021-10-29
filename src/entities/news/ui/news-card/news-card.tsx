import { FC } from 'react';
import { NewsItem } from '../../model';

export interface NewsCardProps extends NewsItem {}

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
      <img src={img} className="post-image" alt="" />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href="#" className="read-more">
      <img src="/assets/images/read.svg" alt="" />
      <span>Read More</span>
    </a>
  </article>
);
