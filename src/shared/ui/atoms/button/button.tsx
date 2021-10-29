/* eslint-disable react/button-has-type */
import { FC } from 'react';

export type ButtonProps = {
  outline?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
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
