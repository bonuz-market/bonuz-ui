/* eslint-disable react/no-array-index-key */
import { FC } from 'react';

import './FansList.scss';
import { FanItem, FanItemProps } from '../../atoms';

export type FansListProps = {
  t: (key: string) => string;
  fans: FanItemProps[];
};

export const FansList: FC<React.PropsWithChildren<FansListProps>> = ({ t, fans }) => (
  <div className="media__fans">
    <span className="media__fans__title">
      {t('fans')}
      <span>{fans.length}</span>
    </span>
    <ul className="media__fans__list">
      {fans.map((item, index) => (
        <FanItem
          key={`${item.name} ${index}`}
          avatar={item.avatar}
          name={item.name}
          description={item.description}
          viewers={item.viewers}
        />
      ))}
    </ul>
  </div>
);
