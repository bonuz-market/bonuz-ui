/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { ActionButton } from '../../atoms';

import mockdata from '../../../mock/mock-data.json';

import './partners-list.scss';
import '../../atoms/action-button/action-button.scss';
import 'swiper/css';
import 'swiper/css/pagination';

export type PartnersListProps = {
  partners: Array<string>;
};

const swiperOptions: SwiperProps = {
  className: 'partners',
  loop: true,
  speed: 800,
  spaceBetween: 20,
  autoplay: {
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  dir: mockdata.rtlLanguages.includes(localStorage.getItem('i18nextLng') || '')
    ? 'rtl'
    : 'ltr',
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.action-button--next',
    prevEl: '.action-button--prev',
  },
  breakpoints: {
    1050: {
      slidesPerView: 1,
    },
    1051: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
};
SwiperCore.use([Pagination, Navigation]);

export const PartnersList: FC<PartnersListProps> = ({ partners }) => (
  <div className="partners-block" data-aos="fade-up" data-aos-duration="1300">
    <ActionButton type="left" className="swiper-prev" />
    <ActionButton type="right" className="swiper-next" />
    <Swiper {...swiperOptions}>
      {partners.map((item, index) => (
        <SwiperSlide>
          <div key={`${item}-${index}`} className="item">
            <div className="block">
              <img src={item} alt={`partner ${index}`} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="swiper-pagination" />
  </div>
);
