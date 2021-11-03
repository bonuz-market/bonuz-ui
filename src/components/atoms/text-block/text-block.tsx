import { FC, PropsWithChildren } from 'react';
import classnames from 'classnames';

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
    className={classnames('text-block', {
      'text-block--primary': type === 'primary',
      'text-block--secondary': type === 'secondary',
      'text-block--with-title': !!title,
    })}
  >
    {title && <span className="text-block__title">{title}</span>}
    <p
      className={classnames('text-block__text', {
        'text-block__text--large': size === 'large',
      })}
    >
      {children}
    </p>
  </div>
);
