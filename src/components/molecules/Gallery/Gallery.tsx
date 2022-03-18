/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import './Gallery.scss';

export type GalleryProps = {
  items: { image: string; link?: string; alt?: string }[];
  lazy?: boolean;
};

export const Gallery: FC<GalleryProps> = ({ items, lazy }) => (
  <div className="gallery">
    {items.map((item, index) => (
      <div className="item" key={index}>
        {item.link ? (
          <a href={item.link} target="_blank" rel="noreferrer">
            <img
              src={item.image}
              alt={item.alt || `item ${index}`}
              loading={lazy ? 'lazy' : undefined}
            />
          </a>
        ) : (
          <img
            src={item.image}
            alt={item.alt || `item ${index}`}
            loading={lazy ? 'lazy' : undefined}
          />
        )}
      </div>
    ))}
  </div>
);
