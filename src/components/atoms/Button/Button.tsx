/* eslint-disable react/button-has-type */
import { FC, PropsWithChildren } from 'react';
import classnames from 'classnames';
import './Button.scss';

type ButtonProps = {
  outline?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  link?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};
export interface ButtonPropsWithChildren
  extends PropsWithChildren<ButtonProps> {}

export const Button: FC<React.PropsWithChildren<ButtonPropsWithChildren>> = ({
  outline,
  disabled,
  secondary,
  link,
  type = 'button',
  onClick,
  children,
}) => (
  <div
    data-disabled={disabled}
    className={classnames({
      button: true,
      'button--stroke': outline && !secondary,
      'button--fill': !outline && !secondary,
    })}
  >
    <button type={type} disabled={disabled} onClick={onClick}>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          <span>{children}</span>
        </a>
      ) : (
        <span>{children}</span>
      )}
    </button>
  </div>
);
