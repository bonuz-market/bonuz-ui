/* eslint-disable react/no-array-index-key */
import { FC } from 'react';

import { NewsItem } from '../../model';
import { NewsCard } from '../news-card';

export type NewsRowProps = {
  news: NewsItem[];
};

export const NewsRow: FC<NewsRowProps> = ({ news }) => (
  <div className="row rowseven">
    <div className="blogs" data-aos="fade-up" data-aos-duration="1300">
      {news.map((item, index) => (
        <NewsCard
          key={`${item.created}-${index}`}
          created={item.created}
          img={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  </div>
);
