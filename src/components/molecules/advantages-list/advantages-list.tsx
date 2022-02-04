/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { AdvantagesItem } from '../../atoms';
import 'swiper/css';
import 'swiper/css/pagination';

export type AdvantagesListProps = {
  items: {
    title: string;
    description: string;
    icon: string;
  }[];
  rtl?: boolean;
};

const swiperOptions: SwiperProps = {
  className: 'blocks',
  modules: [Pagination],
  loop: true,
  pagination: {
    clickable: true,
    el: '.swiper-pagination-advantageslist',
    dynamicBullets: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
    },
    1050: {
      slidesPerView: 3,
      allowTouchMove: false,
    },
  },
};

export const AdvantagesList: FC<AdvantagesListProps> = ({ items, rtl }) => (
  <>
    <Swiper {...swiperOptions} dir={rtl ? 'rtl' : 'ltr'}>
      {items.map((item, index) => (
        <SwiperSlide key={`${item.title}-${index}`}>
          <AdvantagesItem
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="swiper-pagination-advantageslist" />
  </>
);
