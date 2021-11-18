/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';

import { HowItWorksItem } from '../../atoms';
import mockData from '../../../mock/mock-data.json';

export type HowItWorksListProps = {
  items: {
    img: string;
    title: string;
    circleOffset: number;
  }[];
};

const settings: Settings = {
  className: 'blocks',
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  rtl: mockData.rtlLanguages.includes(localStorage.getItem('i18nextLng') || ''),
  customPaging(index: number): JSX.Element {
    return <button type="button" aria-label={`Go to ${index + 1} slide`} />;
  },
  responsive: [
    {
      breakpoint: 4000,
      settings: 'unslick',
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
      },
    },
  ],
};

export const HowItWorksList: FC<HowItWorksListProps> = ({ items }) => (
  <Slider {...settings}>
    {items.map((item, index) => (
      <HowItWorksItem
        key={`${item.title}-${index}`}
        img={item.img}
        title={item.title}
        circleOffset={item.circleOffset}
      />
    ))}
  </Slider>
);
