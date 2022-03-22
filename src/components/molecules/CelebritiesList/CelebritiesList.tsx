/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Autoplay, Lazy, Navigation } from 'swiper';
import { ActionButton, CelebritiesItem } from '../../atoms';
import './CelebritiesList.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/lazy';
import { CelebritiesItemProps } from '../../atoms/CelebritiesItem/CelebritiesItem';

export type CelebritiesListProps = {
  items: CelebritiesItemProps[];
  options?: SwiperProps;
};

const swiperOptions: SwiperProps = {
  modules: [Autoplay, Navigation],
  navigation: {
    nextEl: '.action-button.swiper-next-celebritiesList',
    prevEl: '.action-button.swiper-prev-celebritiesList',
  },
  autoplay: { pauseOnMouseEnter: true, disableOnInteraction: false },
  rewind: true,
  speed: 500,
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1050: {
      slidesPerView: 4,
    },
  },
};

export const CelebritiesList: FC<CelebritiesListProps> = ({
  items,
  options,
}) => {
  if (options?.lazy) {
    swiperOptions.modules?.push(Lazy);
  }
  return (
    <>
      <ActionButton type="left" className="swiper-prev-celebritiesList" />
      <ActionButton type="right" className="swiper-next-celebritiesList" />
      <Swiper {...swiperOptions} {...options}>
        {items.map((item, index) => (
          <SwiperSlide key={`${item.name}-${index}`}>
            <CelebritiesItem
              img={item.img}
              name={item.name}
              role={item.role}
              link={item.link}
              category={item.category}
              lazySwiper={options?.lazy !== undefined}
            />
            {options?.lazy && <div className="swiper-lazy-preloader" />}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
