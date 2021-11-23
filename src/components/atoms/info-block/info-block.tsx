import { FC, PropsWithChildren, ReactNode } from 'react';
import './info-block.scss';
import classnames from 'classnames';

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
    className={classnames('info-block', {
      'info-block--large': size === 'large',
    })}
  >
    <div className="info-block__column">{children}</div>
    <div className="info-block__column">{secondColumn}</div>
  </div>
);
