/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { ActionButton, CelebritiesItem } from '../../atoms';
import './CelebritiesList.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { CelebritiesItemProps } from '../../atoms/CelebritiesItem/CelebritiesItem';

export type CelebritiesListProps = {
  celebrities: CelebritiesItemProps[];
  rtl?: boolean;
};

const swiperOptions: SwiperProps = {
  modules: [Autoplay, Navigation],
  slidesPerView: 'auto',
  spaceBetween: 30,
  navigation: {
    nextEl: '.action-button.swiper-next-celebritiesList',
    prevEl: '.action-button.swiper-prev-celebritiesList',
  },
  autoplay: { pauseOnMouseEnter: true, disableOnInteraction: false },
  rewind: true,
  speed: 500,
};

export const CelebritiesList: FC<CelebritiesListProps> = ({
  celebrities,
  rtl,
}) => (
  <>
    <ActionButton type="left" className="swiper-prev-celebritiesList" />
    <ActionButton type="right" className="swiper-next-celebritiesList" />
    <Swiper {...swiperOptions} dir={rtl ? 'rtl' : 'ltr'}>
      {celebrities.map((item, index) => (
        <SwiperSlide key={`${item.name}-${index}`}>
          <CelebritiesItem
            img={item.img}
            name={item.name}
            role={item.role}
            link={item.link}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);
