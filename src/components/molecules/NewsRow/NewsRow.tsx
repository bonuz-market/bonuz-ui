/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { ActionButton, NewsCard } from '../../atoms';
import './NewsRow.scss';
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
  modules: [Pagination, Navigation],
  speed: 600,
  spaceBetween: 20,
  pagination: {
    clickable: true,
    el: '.swiper-pagination-newslist',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.action-button.swiper-next-newslist',
    prevEl: '.action-button.swiper-prev-newslist',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    1050: {
      slidesPerView: 3,
    },
  },
};

export const NewsRow: FC<NewsRowProps> = ({ news, rtl }) => (
  <>
    <ActionButton type="left" className="swiper-prev-newslist" />
    <ActionButton type="right" className="swiper-next-newslist" />
    <Swiper {...swiperOptions} dir={rtl ? 'rtl' : 'ltr'}>
      {news.map((item, index) => (
        <SwiperSlide key={`${item.title}-${index}`}>
          <NewsCard
            created={item.created}
            img={item.img}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        </SwiperSlide>
      ))}
    </Swiper>

    <div className="swiper-pagination-newslist" />
  </>
);
