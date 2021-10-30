import { FC } from 'react';

import classnames from 'classnames';
import styles from './action-button.module.css';

export type ActionButtonProps = {
  type: 'left' | 'right';
  className?: string;
  style?: {
    [key: string]: string;
  };
  onClick?: () => void;
};

export const ActionButton: FC<ActionButtonProps> = ({
  type,
  className,
  style,
  onClick,
}) => (
  <button
    className={classnames(styles.container, {
      [className || '']: className,
    })}
    type="button"
    onClick={onClick}
    style={{ ...style }}
  >
    <img
      className={classnames({
        prev: type === 'left',
        [styles.prev]: type === 'left',
        next: type === 'right',
        [styles.next]: type === 'right',
      })}
      src="/assets/images/slider-arrow.svg"
      alt=""
    />
  </button>
);
