import { FC } from 'react';

import './fans-list.scss';
import { FanItem, FanItemProps } from '../../atoms';

export type FansListProps = {
  t: (key: string) => string;
  fans: FanItemProps[];
};

export const FansList: FC<FansListProps> = ({ t, fans }) => (
  <div className="media__fans">
    <span className="media__fans__title">
      {t('fans')}
      <span>{fans.length}</span>
    </span>
    <ul className="media__fans__list">
      {fans.map((item) => (
        <FanItem
          avatar={item.avatar}
          name={item.name}
          description={item.description}
          viewers={item.viewers}
        />
      ))}
    </ul>
  </div>
);
