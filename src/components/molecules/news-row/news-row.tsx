/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { ActionButton, NewsCard } from '../../atoms';
import '../../atoms/news-card/news-card-wrapper.scss';
import 'swiper/css';
import 'swiper/css/pagination';

export type NewsRowProps = {
  news: {
    created: string;
    img: string;
    title: string;
    description: string;
    link: string;
  }[];
  rtl?: boolean;
};

const swiperOptions: SwiperProps = {
  speed: 600,
  spaceBetween: 20,
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.action-button--next',
    prevEl: '.action-button--prev',
  },
  breakpoints: {
    1050: {
      slidesPerView: 'auto',
    },
    1051: {
      slidesPerView: 3,
    },
  },
};
SwiperCore.use([Pagination, Navigation]);

export const NewsRow: FC<NewsRowProps> = ({ news, rtl }) => (
  <>
    <ActionButton type="left" className="swiper-prev" />
    <ActionButton type="right" className="swiper-next" />
    <Swiper {...swiperOptions} dir={rtl ? 'rtl' : 'ltr'}>
      {news.map((item, index) => (
        <SwiperSlide>
          <NewsCard
            key={`${item.created}-${index}`}
            created={item.created}
            img={item.img}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        </SwiperSlide>
      ))}
    </Swiper>

    <div className="swiper-pagination" />
  </>
);
