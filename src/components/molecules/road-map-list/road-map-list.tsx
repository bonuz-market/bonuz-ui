/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';

import { ActionButton, RoadMapItem } from '../../atoms';
import mockData from '../../../mock/mock-data.json';

export type RoadMapListProps = {
  items: {
    title: string;
    description: string;
  }[];
};

const settings: Settings = {
  infinite: false,
  slidesToShow: 3,
  speed: 600,
  prevArrow: <ActionButton type="left" />,
  nextArrow: <ActionButton type="right" />,
  rtl: mockData.rtlLanguages.includes(localStorage.getItem('i18nextLng') || ''),
  customPaging(index: number): JSX.Element {
    return <button type="button" aria-label={`Go to ${index + 1} slide`} />;
  },
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
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

export const RoadMapList: FC<RoadMapListProps> = ({ items }) => (
  <div className="slides-block">
    <Slider {...settings}>
      {items.map((item, index) => (
        <div className="slick-slide" key={`${item.title}-${index}`}>
          <RoadMapItem
            key={`${item.title}-${index}`}
            title={item.title}
            description={item.description}
          />
        </div>
      ))}
    </Slider>
  </div>
);
