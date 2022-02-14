/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { CelebritiesItem } from '../../atoms';
import './CelebritiesList.scss';
import 'swiper/css';

export type CelebritiesListProps = {
  celebrities: {
    img: string;
    name: string;
    role: string;
  }[];
  rtl?: boolean;
};

const swiperOptions: SwiperProps = {
  modules: [Autoplay],
  slidesPerView: 'auto',
  spaceBetween: 32,
  autoplay: { pauseOnMouseEnter: true, disableOnInteraction: false },
  loop: true,
  speed: 500,
};

export const CelebritiesList: FC<CelebritiesListProps> = ({
  celebrities,
  rtl,
}) => (
  <Swiper
    {...swiperOptions}
    loopedSlides={celebrities.length}
    dir={rtl ? 'rtl' : 'ltr'}
  >
    {celebrities.map((item, index) => (
      <SwiperSlide key={`${item.name}-${index}`}>
        <CelebritiesItem img={item.img} name={item.name} role={item.role} />
      </SwiperSlide>
    ))}
  </Swiper>
);
