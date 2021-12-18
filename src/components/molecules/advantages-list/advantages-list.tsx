/* eslint-disable react/no-array-index-key */
import { FC } from 'react';

import Slider, { Settings } from 'react-slick';
import { AdvantagesItem } from '../../atoms';
import mockData from '../../../mock/mock-data.json';
import '../../atoms/advantages-item/advantages-wrapper.scss';

export type AdvantagesListProps = {
  items: {
    title: string;
    description: string;
    icon: string;
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
      },
    },
  ],
};

export const AdvantagesList: FC<AdvantagesListProps> = ({ items }) => (
  <Slider {...settings}>
    {items.map((item, index) => (
      <AdvantagesItem
        key={`${item.title}-${index}`}
        title={item.title}
        description={item.description}
        icon={item.icon}
      />
    ))}
  </Slider>
);
