/* eslint-disable react/button-has-type */
import { FC, PropsWithChildren } from 'react';
import classnames from 'classnames';

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
      'button-stroke': outline && !secondary,
      'button-fill': !outline && !secondary,
      button: secondary,
    })}
  >
    <button type={type} disabled={disabled} onClick={onClick}>
      <span>{children}</span>
    </button>
  </div>
);
