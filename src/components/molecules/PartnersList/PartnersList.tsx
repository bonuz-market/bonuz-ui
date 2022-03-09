/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import './PartnersList.scss';

export type PartnersListProps = {
  items: { image: string; link?: string }[];
};

export const PartnersList: FC<PartnersListProps> = ({ items }) => (
  <div className="partners-list">
    {items.map((item, index) => (
      <div className="item" key={index}>
        {item.link ? (
          <a href={item.link} target="_blank" rel="noreferrer">
            <img src={item.image} alt={`partner ${index}`} />
          </a>
        ) : (
          <img src={item.image} alt={`partner ${index}`} />
        )}
      </div>
    ))}
  </div>
);
