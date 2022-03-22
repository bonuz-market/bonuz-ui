/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { AdvantagesItem } from '../../atoms';
import './AdvantagesList.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import { AdvantagesItemProps } from '../../atoms/AdvantagesItem/AdvantagesItem';

export type AdvantagesListProps = {
  items: AdvantagesItemProps[];
  options?: SwiperProps;
};

const swiperOptions: SwiperProps = {
  modules: [Pagination],
  pagination: {
    clickable: true,
    el: '.swiper-pagination-advantageslist',
    dynamicBullets: true,
  },
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

export const AdvantagesList: FC<AdvantagesListProps> = ({ items, options }) => (
  <>
    <Swiper {...swiperOptions} {...options}>
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
    <div className="pagination">
      <div className="swiper-pagination-advantageslist" />
    </div>
  </>
);
