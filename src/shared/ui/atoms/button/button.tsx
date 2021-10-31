/* eslint-disable react/button-has-type */
import { FC, PropsWithChildren } from 'react';

type ButtonProps = {
  outline?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};
export interface ButtonPropsWithChildren
  extends PropsWithChildren<ButtonProps> {}

export const Button: FC<ButtonPropsWithChildren> = ({
  outline,
  disabled,
  type = 'button',
  onClick,
  children,
}) => (
  <div className={outline ? 'button-stroke' : 'button-fill'}>
    <button type={type} disabled={disabled} onClick={onClick}>
      <span>{children}</span>
    </button>
  </div>
);
