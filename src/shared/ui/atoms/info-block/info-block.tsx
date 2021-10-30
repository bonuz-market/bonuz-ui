import { FC, PropsWithChildren, ReactNode } from 'react';

import classnames from 'classnames';
import styles from './info-block.module.css';

type InfoBlockProps = {
  size?: 'small' | 'large';
  secondColumn?: ReactNode;
};
export interface InfoBlockPropsWithChildren
  extends PropsWithChildren<InfoBlockProps> {}

export const InfoBlock: FC<InfoBlockPropsWithChildren> = ({
  size,
  secondColumn,
  children,
}) => (
  <div
    className={classnames(styles.container, {
      [styles.large]: size === 'large',
    })}
  >
    <div className={styles.column}>{children}</div>
    <div className={styles.column}>{secondColumn}</div>
  </div>
);
