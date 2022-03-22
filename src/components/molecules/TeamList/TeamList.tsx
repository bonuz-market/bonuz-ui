/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Lazy, Navigation } from 'swiper';
import { ActionButton, TeamCard } from '../../atoms';
import './TeamList.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/lazy';
import { TeamCardProps } from '../../atoms/TeamCard/TeamCard';

export type TeamListProps = {
  items: TeamCardProps[];
  rounded?: boolean;
  centered?: boolean;
  options?: SwiperProps;
};
const swiperOptions: SwiperProps = {
  modules: [Navigation],
  speed: 600,
  rewind: true,
  navigation: {
    nextEl: '.action-button.swiper-next-teamlist',
    prevEl: '.action-button.swiper-prev-teamlist',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      slidesPerGroupAuto: true,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    1050: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
};

export const TeamList: FC<TeamListProps> = ({
  items,
  options,
  rounded,
  centered,
}) => {
  if (options?.lazy) {
    swiperOptions.modules?.push(Lazy);
  }
  return (
    <>
      <ActionButton type="left" className="swiper-prev-teamlist" />
      <ActionButton type="right" className="swiper-next-teamlist" />
      <Swiper {...swiperOptions} {...options}>
        {items.map((item, index) => (
          <SwiperSlide key={`${item.name}-${index}`}>
            <TeamCard
              img={item.img}
              name={item.name}
              position={item.position}
              link={item.link}
              rounded={rounded}
              centered={centered}
              lazySwiper={options?.lazy !== undefined}
            />
            {options?.lazy && <div className="swiper-lazy-preloader" />}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
