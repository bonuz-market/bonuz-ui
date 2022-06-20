/* eslint-disable react/button-has-type */
import { FC } from 'react';
import classnames from 'classnames';
import './Button.scss';

interface ButtonProps {
  outline?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  link?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export const Button: FC<React.PropsWithChildren<ButtonProps>> = ({
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
