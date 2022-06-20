import { FC } from 'react';
import classnames from 'classnames';
import './ActionButton.scss';

export type ActionButtonProps = {
  type: 'left' | 'right';
  className?: string;
  style?: {
    [key: string]: string;
  };
  onClick?: () => void;
};

export const ActionButton: FC<React.PropsWithChildren<ActionButtonProps>> = ({
  type,
  className,
  style,
  onClick,
}) => (
  <button
    className={classnames('action-button', {
      [className || '']: className,
    })}
    type="button"
    onClick={onClick}
    style={{ ...style }}
  >
    <div
      className={classnames({
        prev: type === 'left',
        'action-button--prev': type === 'left',
        next: type === 'right',
        'action-button--next': type === 'right',
      })}
    />
  </button>
);
