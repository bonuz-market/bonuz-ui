/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { ActionButton, RoadMapItem } from '../../atoms';
import './road-map-list.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export type RoadMapListProps = {
  items: {
    title: string;
    description: string;
  }[];
  rtl?: boolean;
};

const swiperOptions: SwiperProps = {
  modules: [Pagination, Navigation],
  speed: 600,
  pagination: {
    clickable: true,
    el: '.swiper-pagination-roadmaplist',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.action-button.swiper-next-roadmaplist',
    prevEl: '.action-button.swiper-prev-roadmaplist',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    720: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1050: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
  },
};

export const RoadMapList: FC<RoadMapListProps> = ({ items, rtl }) => (
  <>
    <ActionButton type="left" className="swiper-prev-roadmaplist" />
    <ActionButton type="right" className="swiper-next-roadmaplist" />
    <Swiper {...swiperOptions} dir={rtl ? 'rtl' : 'ltr'}>
      {items.map((item, index) => (
        <SwiperSlide key={`${item.title}-${index}`}>
          <RoadMapItem title={item.title} description={item.description} />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="swiper-pagination-roadmaplist" />
  </>
);
