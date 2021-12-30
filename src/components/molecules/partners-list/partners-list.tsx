/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';

import { ActionButton } from '../../atoms';
import './partners-list.scss';

export type PartnersListProps = {
  partners: Array<string>;
};

const settings: Settings = {
  className: 'partners',
  slidesToShow: 3,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 2000,
  rows: 2,
  pauseOnHover: false,
  prevArrow: <ActionButton type="left" />,
  nextArrow: <ActionButton type="right" />,
  customPaging(index: number): JSX.Element {
    return <button type="button" aria-label={`Go to ${index + 1} slide`} />;
  },
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
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
            <img src={item} alt="" />
          </div>
        </div>
      ))}
    </Slider>
  </div>
);
