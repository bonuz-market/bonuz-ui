/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';

import { ActionButton } from '../../atoms';

export type PartnersListProps = {
  partners: Array<Array<string>>;
};

const settings: Settings = {
  className: 'partners',
  slidesToShow: 3,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  prevArrow: <ActionButton type="left" />,
  nextArrow: <ActionButton type="right" />,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const PartnersList: FC<PartnersListProps> = ({ partners }) => (
  <div className="partners-block" data-aos="fade-up" data-aos-duration="1300">
    <Slider {...settings}>
      {partners.map((item, index) => (
        <div key={`${item}-${index}`} className="item">
          <div className="block">
            <img src={item[0]} alt="" />
          </div>
          <div className="block">
            <img src={item[1]} alt="" />
          </div>
        </div>
      ))}
    </Slider>
  </div>
);
