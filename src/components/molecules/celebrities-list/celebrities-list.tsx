/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';

import { CelebritiesItem } from '../../atoms';

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
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 4000,
      settings: 'unslick',
    },
    {
      breakpoint: 2000,
      settings: 'unslick',
    },
    {
      breakpoint: 830,
      settings: 'unslick',
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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
