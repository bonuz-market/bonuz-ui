/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { ActionButton, TeamCard } from '../../atoms';
import '../../atoms/team-card/team-card-wrapper.scss';
import 'swiper/css';
import 'swiper/css/pagination';

export type TeamListProps = {
  items: {
    img: string;
    name: string;
    position: string;
    link?: string;
  }[];
  rtl?: boolean;
};

const swiperOptions: SwiperProps = {
  className: 'team',
  speed: 600,
  spaceBetween: 20,
  pagination: {
    clickable: true,
    el: '.swiper-pagination-teamlist',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.action-button.swiper-next-teamlist',
    prevEl: '.action-button.swiper-prev-teamlist',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      slidesOffsetBefore: 5,
    },

    1050: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
};
SwiperCore.use([Pagination, Navigation]);

export const TeamList: FC<TeamListProps> = ({ items, rtl }) => (
  <div className="team-list">
    <ActionButton type="left" className="swiper-prev-teamlist" />
    <ActionButton type="right" className="swiper-next-teamlist" />
    <Swiper {...swiperOptions} dir={rtl ? 'rtl' : 'ltr'}>
      {items.map((item, index) => (
        <SwiperSlide>
          <TeamCard
            key={`${item.name}-${index}`}
            img={item.img}
            name={item.name}
            position={item.position}
            link={item.link}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="swiper-pagination-teamlist" />
  </div>
);
