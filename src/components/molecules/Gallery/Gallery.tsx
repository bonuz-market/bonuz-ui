/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import './Gallery.scss';

export type GalleryProps = {
  items: { image: string; link?: string }[];
};

export const Gallery: FC<GalleryProps> = ({ items }) => (
  <div className="gallery">
    {items.map((item, index) => (
      <div className="item" key={index}>
        {item.link ? (
          <a href={item.link} target="_blank" rel="noreferrer">
            <img src={item.image} alt={`item ${index}`} />
          </a>
        ) : (
          <img src={item.image} alt={`item ${index}`} />
        )}
      </div>
    ))}
  </div>
);
