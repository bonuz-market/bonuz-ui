/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';

import { ActionButton, CelebritiesItem } from '../../atoms';
import mockData from '../../../mock/mock-data.json';
import '../../atoms/celebrities-item/celebrities-wrapper.scss';

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
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 4000,
      settings: {
        slidesToShow: 3,
        dots: false,
        slidesToScroll: 1,
        variableWidth: true,
      },
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
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
