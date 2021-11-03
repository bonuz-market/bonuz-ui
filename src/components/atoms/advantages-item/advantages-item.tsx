import { FC } from 'react';

export type AdvantagesItemProps = {
  title: string;
  description: string;
  icon: string;
  iconBlur: string;
};

export const AdvantagesItem: FC<AdvantagesItemProps> = ({
  title,
  description,
  icon,
  iconBlur,
}) => (
  <div className="block">
    <i data-aos="fade-up" data-aos-duration="1300" data-aos-delay="0">
      <img src={iconBlur} alt="" className="blur" />
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
