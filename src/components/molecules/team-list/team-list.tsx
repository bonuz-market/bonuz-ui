/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';

import { ActionButton, TeamCard } from '../../atoms';
import mockData from '../../../mock/mock-data.json';
import '../../atoms/team-card/team-card-wrapper.scss';

export type TeamListProps = {
  items: {
    img: string;
    name: string;
    position: string;
    link: string;
  }[];
};

const settings: Settings = {
  infinite: false,
  className: 'team',
  slidesToShow: 4,
  prevArrow: <ActionButton type="left" />,
  nextArrow: <ActionButton type="right" />,
  speed: 600,
  rtl: mockData.rtlLanguages.includes(localStorage.getItem('i18nextLng') || ''),
  customPaging(index: number): JSX.Element {
    return <button type="button" aria-label={`Go to ${index + 1} slide`} />;
  },
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        variableWidth: true,
        infinite: false,
      },
    },
  ],
};

export const TeamList: FC<TeamListProps> = ({ items }) => (
  <div className="team-list" data-aos="fade-up" data-aos-duration="1300">
    <Slider {...settings}>
      {items.map((item, index) => (
        <TeamCard
          key={`${item.name}-${index}`}
          img={item.img}
          name={item.name}
          position={item.position}
          link={item.link}
        />
      ))}
    </Slider>
  </div>
);
