/* eslint-disable react/no-array-index-key */
import { FC } from 'react';

import Slider, { Settings } from 'react-slick';
import { NewsItem } from '../../model';
import { NewsCard } from '../news-card';

export type NewsRowProps = {
  news: NewsItem[];
};

const settings: Settings = {
  className: 'blogs',
  dots: true,
  arrows: false,
  infinite: false,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging(index: number): JSX.Element {
    return <button type="button" aria-label={`Go to ${index + 1} slide`} />;
  },
  responsive: [
    {
      breakpoint: 4000,
      settings: 'unslick',
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
      },
    },
  ],
};

export const NewsRow: FC<NewsRowProps> = ({ news }) => (
  <div className="row rowseven">
    <Slider {...settings} data-aos="fade-up" data-aos-duration="1300">
      {news.map((item, index) => (
        <NewsCard
          key={`${item.created}-${index}`}
          created={item.created}
          img={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </Slider>
  </div>
);
