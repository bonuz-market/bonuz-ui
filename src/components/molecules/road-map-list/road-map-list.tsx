/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { ActionButton, RoadMapItem } from '../../atoms';
import '../../atoms/road-map-item/road-map-wrapper.scss';
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
  className: 'partners',
  speed: 600,
  slidesPerView: 3,
  slidesOffsetBefore: 10,
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.action-button--next',
    prevEl: '.action-button--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1050: {
      slidesPerView: 2,
    },
    1250: {
      slidesPerView: 3,
    },
  },
};
SwiperCore.use([Pagination, Navigation]);

export const RoadMapList: FC<RoadMapListProps> = ({ items, rtl }) => (
  <div className="slides-block">
    <ActionButton type="left" className="swiper-prev" />
    <ActionButton type="right" className="swiper-next" />
    <Swiper {...swiperOptions} dir={rtl ? 'rtl' : 'ltr'}>
      {items.map((item, index) => (
        <SwiperSlide>
          <RoadMapItem
            key={`${item.title}-${index}`}
            title={item.title}
            description={item.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="swiper-pagination" />
  </div>
);
