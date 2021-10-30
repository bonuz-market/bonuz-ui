import { FC, PropsWithChildren } from 'react';
import classnames from 'classnames';

import styles from './text-block.module.css';

type TextBlockProps = {
  type?: 'primary' | 'secondary';
  size?: 'small' | 'large';
};
export interface TextBlockPropsWithChildren
  extends PropsWithChildren<TextBlockProps> {}

export const TextBlock: FC<TextBlockPropsWithChildren> = ({
  type = 'primary',
  size = 'small',
  children,
}) => (
  <div
    className={classnames(styles.container, {
      [styles.primary]: type === 'primary',
      [styles.secondary]: type === 'secondary',
    })}
  >
    <p
      className={classnames(styles.text, {
        [styles.large]: size === 'large',
      })}
    >
      {children}
    </p>
  </div>
);
