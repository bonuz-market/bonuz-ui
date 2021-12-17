import { FC } from 'react';
import './advantages-item.scss';

export type AdvantagesItemProps = {
  title: string;
  description: string;
  icon: string;
};

export const AdvantagesItem: FC<AdvantagesItemProps> = ({
  title,
  description,
  icon,
}) => (
  <div className="advantages-item">
    <i data-aos="fade-up" data-aos-duration="1300" data-aos-delay="0">
      <img src={icon} alt="" className="blur" />
      <img src={icon} alt="" />
    </i>
    <h4 data-aos="fade-up" data-aos-duration="1300" data-aos-delay="50">
      {title}
    </h4>
    <p data-aos="fade-up" data-aos-duration="1300" data-aos-delay="150">
      {description}
    </p>
  </div>
);
