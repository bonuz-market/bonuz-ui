/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { HowItWorksItem } from '../../atoms';
import './HowItWorksList.scss';
import 'swiper/css';
import 'swiper/css/pagination';

export type HowItWorksListProps = {
  items: {
    img: string;
    title: string;
    circleOffset: number;
  }[];
  rtl?: boolean;
};

const swiperOptions: SwiperProps = {
  modules: [Pagination],
  pagination: {
    clickable: true,
    el: '.swiper-pagination-howitworks',
    dynamicBullets: true,
  },
  speed: 300,
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      allowTouchMove: true,
    },
    1050: {
      slidesPerView: 5,
      allowTouchMove: false,
    },
  },
};

export const HowItWorksList: FC<HowItWorksListProps> = ({ items, rtl }) => (
  <>
    <Swiper {...swiperOptions} dir={rtl ? 'rtl' : 'ltr'}>
      {items.map((item, index) => (
        <SwiperSlide key={`${item.title}-${index}`}>
          <HowItWorksItem
            img={item.img}
            title={item.title}
            circleOffset={item.circleOffset}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="swiper-pagination-howitworks" />
  </>
);
