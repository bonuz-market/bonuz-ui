import { FC, PropsWithChildren } from 'react';
import classnames from 'classnames';
import './Tab.scss';

export type TabTitleProps = PropsWithChildren<{
  title: string;
  type?: 'primary' | 'secondary';
  isActive: boolean;
  onClick: () => void;
}>;

export const TabTitle: FC<React.PropsWithChildren<TabTitleProps>> = ({
  title,
  type = 'primary',
  isActive,
  onClick,
}) => (
  <li
    className={classnames('tab', {
      'tab--secondary': type === 'secondary',
      'tab--active': isActive,
    })}
  >
    <button type="button" onClick={onClick}>
      {title}
    </button>
  </li>
);
