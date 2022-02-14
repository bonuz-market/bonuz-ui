/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { ActionButton } from '../../atoms';

import './PartnersList.scss';
import 'swiper/css';
import 'swiper/css/pagination';

export type PartnersListProps = {
  partners: Array<string>;
  rtl?: boolean;
};

const swiperOptions: SwiperProps = {
  className: 'partners',
  modules: [Pagination, Navigation],
  loop: true,
  speed: 800,
  autoplay: {
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
    el: '.swiper-pagination-partnerslist',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.action-button.swiper-next-partnerslist',
    prevEl: '.action-button.swiper-prev-partnerslist',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1050: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
  },
};

export const PartnersList: FC<PartnersListProps> = ({ partners, rtl }) => (
  <>
    <ActionButton type="left" className="swiper-prev-partnerslist" />
    <ActionButton type="right" className="swiper-next-partnerslist" />
    <Swiper {...swiperOptions} dir={rtl ? 'rtl' : 'ltr'}>
      {partners.map((item, index) => (
        <SwiperSlide key={`${item}-${index}`}>
          <div className="item">
            <div className="block">
              <img src={item} alt={`partner ${index}`} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="swiper-pagination-partnerslist" />
  </>
);
