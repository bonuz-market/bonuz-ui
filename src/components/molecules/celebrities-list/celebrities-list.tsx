/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { CelebritiesItem } from '../../atoms';
import '../../atoms/celebrities-item/celebrities-wrapper.scss';
import 'swiper/css';
import mockdata from '../../../mock/mock-data.json';

export type CelebritiesListProps = {
  celebrities: {
    img: string;
    name: string;
    role: string;
  }[];
};

const swiperOptions: SwiperProps = {
  className: 'celebs-list',
  slidesPerView: 'auto',
  spaceBetween: 32,
  autoplay: { pauseOnMouseEnter: true, disableOnInteraction: false },
  loop: true,
  speed: 500,
  dir: mockdata.rtlLanguages.includes(localStorage.getItem('i18nextLng') || '')
    ? 'rtl'
    : 'ltr',
};
SwiperCore.use([Autoplay]);

export const CelebritiesList: FC<CelebritiesListProps> = ({ celebrities }) => (
  <Swiper {...swiperOptions} loopedSlides={celebrities.length}>
    {celebrities.map((item, index) => (
      <SwiperSlide>
        <CelebritiesItem
          key={`${item.name}-${index}`}
          img={item.img}
          name={item.name}
          role={item.role}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);
