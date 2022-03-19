/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { HowItWorksItem } from '../../atoms';
import './HowItWorksList.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import { HowItWorksItemProps } from '../../atoms/HowItWorksItem/HowItWorksItem';

export type HowItWorksListProps = {
  items: HowItWorksItemProps[];
  options?: SwiperProps;
};

const swiperOptions: SwiperProps = {
  modules: [Pagination],
  pagination: {
    clickable: true,
    el: '.swiper-pagination-howitworks',
    dynamicBullets: true,
  },
  speed: 300,
  rewind: true,
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      allowTouchMove: true,
    },
    1050: {
      slidesPerView: 5,
    },
  },
};

export const HowItWorksList: FC<HowItWorksListProps> = ({ items, options }) => (
  <>
    <Swiper {...swiperOptions} {...options}>
      {items.map((item, index) => (
        <SwiperSlide key={`${item.title}-${index}`}>
          <HowItWorksItem
            img={item.img}
            title={item.title}
            circleOffset={item.circleOffset}
          />
          <div className="slide-stripe" />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="pagination">
      <div className="swiper-pagination-howitworks" />
    </div>
  </>
);
