/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { ActionButton, TeamCard } from '../../atoms';
import './TeamList.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import { TeamCardProps } from '../../atoms/TeamCard/TeamCard';

export type TeamListProps = {
  items: TeamCardProps[];
  rtl?: boolean;
  rounded?: boolean;
  centered?: boolean;
  options?: SwiperProps;
};
const swiperOptions: SwiperProps = {
  className: 'team',
  modules: [Navigation],
  slidesPerView: 'auto',
  spaceBetween: 50,
  slidesPerGroupAuto: true,
  slidesPerGroup: 1,
  speed: 600,
  rewind: true,
  navigation: {
    nextEl: '.action-button.swiper-next-teamlist',
    prevEl: '.action-button.swiper-prev-teamlist',
  },
};

export const TeamList: FC<TeamListProps> = ({
  items,
  rtl,
  options,
  rounded,
  centered,
}) => (
  <>
    <ActionButton type="left" className="swiper-prev-teamlist" />
    <ActionButton type="right" className="swiper-next-teamlist" />
    <Swiper {...swiperOptions} dir={rtl ? 'rtl' : 'ltr'} {...options}>
      {items.map((item, index) => (
        <SwiperSlide key={`${item.name}-${index}`}>
          <TeamCard
            img={item.img}
            name={item.name}
            position={item.position}
            link={item.link}
            rounded={rounded}
            centered={centered}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);
