import { FC, PropsWithChildren } from 'react';
import classnames from 'classnames';

import styles from './text-block.module.css';

type TextBlockProps = {
  type?: 'primary' | 'secondary';
  size?: 'small' | 'large';
  title?: string;
};
export interface TextBlockPropsWithChildren
  extends PropsWithChildren<TextBlockProps> {}

export const TextBlock: FC<TextBlockPropsWithChildren> = ({
  type = 'primary',
  size = 'small',
  title,
  children,
}) => (
  <div
    className={classnames(styles.container, {
      [styles.primary]: type === 'primary',
      [styles.secondary]: type === 'secondary',
      [styles.withTitle]: !!title,
    })}
  >
    {title && <span className={styles.title}>{title}</span>}
    <p
      className={classnames(styles.text, {
        [styles.large]: size === 'large',
      })}
    >
      {children}
    </p>
  </div>
);
