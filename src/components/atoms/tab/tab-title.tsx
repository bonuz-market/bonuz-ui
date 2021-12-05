import { FC, PropsWithChildren } from 'react';
import classnames from 'classnames';
import './tab.scss';

export type TabTitleProps = PropsWithChildren<{
  title: string;
  type?: 'primary' | 'secondary';
  isActive: boolean;
  onClick: () => void;
}>;

export const TabTitle: FC<TabTitleProps> = ({
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
