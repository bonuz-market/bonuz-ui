/* eslint-disable react/button-has-type */
import { FC, PropsWithChildren } from 'react';
import classnames from 'classnames';
import './button.scss';

type ButtonProps = {
  outline?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};
export interface ButtonPropsWithChildren
  extends PropsWithChildren<ButtonProps> {}

export const Button: FC<ButtonPropsWithChildren> = ({
  outline,
  disabled,
  secondary,
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
      <span>{children}</span>
    </button>
  </div>
);
