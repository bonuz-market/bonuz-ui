import classNames from 'classnames';
import { FC } from 'react';
import './TeamCard.scss';
import placeholder from '../../../assets/images/placeholder.svg';

export type TeamCardProps = {
  img: string;
  name: string;
  position: string;
  link?: string;
  rounded?: boolean;
  centered?: boolean;
  lazy?: boolean;
  /**
   * Should be used  with swiper slider
   */
  lazySwiper?: boolean;
};

export const TeamCard: FC<React.PropsWithChildren<TeamCardProps>> = ({
  img,
  name,
  position,
  link,
  rounded,
  centered,
  lazy,
  lazySwiper,
}) => (
  <div
    className={classNames('team-item', {
      rounded,
      centered,
    })}
  >
    {!lazySwiper && (
      <img src={img} alt={name} loading={lazy ? 'lazy' : undefined} />
    )}
    {lazySwiper && (
      <img
        data-src={img}
        src={placeholder}
        className="swiper-lazy"
        alt={name}
      />
    )}
    <p>{name}</p>
    <span>
      {link && (
        <div>
          <a href={link} target="_blank" rel="noreferrer">
            {position}
          </a>
        </div>
      )}
      {!link && position}
    </span>
  </div>
);
