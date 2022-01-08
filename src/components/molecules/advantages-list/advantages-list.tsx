/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { AdvantagesItem } from '../../atoms';
import mockData from '../../../mock/mock-data.json';
import '../../atoms/advantages-item/advantages-wrapper.scss';
import 'swiper/css';
import 'swiper/css/pagination';

export type AdvantagesListProps = {
  items: {
    title: string;
    description: string;
    icon: string;
  }[];
};

const swiperOptions: SwiperProps = {
  className: 'blocks',
  loop: true,
  dir: mockData.rtlLanguages.includes(localStorage.getItem('i18nextLng') || '')
    ? 'rtl'
    : 'ltr',
  pagination: { clickable: true },

  breakpoints: {
    1050: {
      slidesPerView: 1,
    },
    1051: {
      slidesPerView: 3,
      allowTouchMove: false,
    },
  },
};
SwiperCore.use([Pagination]);

export const AdvantagesList: FC<AdvantagesListProps> = ({ items }) => (
  <Swiper {...swiperOptions}>
    {items.map((item, index) => (
      <SwiperSlide>
        <AdvantagesItem
          key={`${item.title}-${index}`}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);
