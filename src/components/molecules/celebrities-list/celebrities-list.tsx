/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';

import { ActionButton, CelebritiesItem } from '../../atoms';

export type CelebritiesListProps = {
  celebrities: {
    img: string;
    name: string;
    country: string;
  }[];
};

const settings: Settings = {
  className: 'celebs-list',
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: <ActionButton type="left" />,
  nextArrow: <ActionButton type="right" />,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 820,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};

export const CelebritiesList: FC<CelebritiesListProps> = ({ celebrities }) => (
  <Slider {...settings}>
    {celebrities.map((item, index) => (
      <CelebritiesItem
        key={`${item.name}-${index}`}
        img={item.img}
        name={item.name}
        country={item.country}
      />
    ))}
  </Slider>
);
