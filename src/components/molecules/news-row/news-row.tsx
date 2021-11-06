/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';

import { ActionButton, NewsCard } from '../../atoms';

export type NewsRowProps = {
  news: {
    created: string;
    img: string;
    title: string;
    description: string;
  }[];
};

const settings: Settings = {
  className: 'blogs',
  dots: false,
  infinite: false,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <ActionButton type="left" />,
  nextArrow: <ActionButton type="right" />,
  customPaging(index: number): JSX.Element {
    return <button type="button" aria-label={`Go to ${index + 1} slide`} />;
  },
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        arrows: false,
        dots: true,
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
