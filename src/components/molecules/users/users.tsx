import { FC } from 'react';

import './users.scss';
import coinIcon from '../../../assets/icons/coin.svg';

export type UsersProps = {
  t: (key: string) => string;
  users: {
    name: string;
    coins: number;
    level: string;
  }[];
};

export const Users: FC<UsersProps> = ({ t, users }) => (
  <table className="users">
    <tr>
      <th className="users__cell users__cell--head">
        <span>{t('name')}</span>
      </th>
      <th className="users__cell users__cell--head">{t('coins')}</th>
      <th className="users__cell users__cell--head">{t('level')}</th>
    </tr>
    {users.map((item) => (
      <tr className="users__row">
        <td className="users__cell">{item.name}</td>
        <td className="users__cell">
          <span className="users__cell__coins">
            <img src={coinIcon} alt="" />
            {item.coins}
          </span>
        </td>
        <td className="users__cell">
          <span className="users__cell__level">{item.level}</span>
        </td>
      </tr>
    ))}
  </table>
);
