/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { ActionButton, RoadMapItem } from '../../atoms';
import './RoadMapList.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { RoadMapItemProps } from '../../atoms/RoadMapItem/RoadMapItem';

export type RoadMapListProps = {
  items: RoadMapItemProps[];
  options?: SwiperProps;
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
  slidesPerView: 'auto',
  rewind: true,
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1050: {
      slidesPerView: 3,
    },
  },
};

export const RoadMapList: FC<RoadMapListProps> = ({ items, options }) => (
  <>
    <ActionButton type="left" className="swiper-prev-roadmaplist" />
    <ActionButton type="right" className="swiper-next-roadmaplist" />
    <Swiper {...swiperOptions} {...options}>
      {items.map((item, index) => (
        <SwiperSlide key={`${item.title}-${index}`}>
          <RoadMapItem title={item.title} description={item.description} />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="pagination">
      <div className="swiper-pagination-roadmaplist" />
    </div>
  </>
);
