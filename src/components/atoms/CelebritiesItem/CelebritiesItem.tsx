import { FC } from 'react';
import './CelebritiesItem.scss';

export type CelebritiesItemProps = {
  img: string;
  name: string;
  role: string;
  /**
   * Must be used with category prop
   */
  link?: string;
  /**
   * Must be used with link prop
   */
  category?: string;
  lazy?: boolean;
  /**
   * Should be used  with swiper slider
   */
  lazySwiper?: boolean;
};
const Item: FC<CelebritiesItemProps> = ({
  img,
  name,
  role,
  link,
  category,
  lazy,
  lazySwiper,
}) => (
  <>
    {!lazySwiper && (
      <img src={img} alt={name} loading={lazy ? 'lazy' : undefined} />
    )}
    {lazySwiper && <img alt={name} data-src={img} className="swiper-lazy" />}
    <div>
      <div className="celeb__info">
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
      {link && category && (
        <button type="button">
          {link === '#' && <a href={link}>{category}</a>}
          {link !== '#' && (
            <a href={link} target="_blank" rel="noreferrer">
              {category}
            </a>
          )}
        </button>
      )}
    </div>
  </>
);

export const CelebritiesItem: FC<CelebritiesItemProps> = ({
  img,
  name,
  role,
  link,
  category,
  lazy,
  lazySwiper,
}) => (
  <div className="celeb">
    <Item
      img={img}
      name={name}
      role={role}
      link={link}
      category={category}
      lazy={lazy}
      lazySwiper={lazySwiper}
    />
  </div>
);
