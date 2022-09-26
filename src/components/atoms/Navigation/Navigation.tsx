/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import './Navigation.scss';

interface NavigationProps {
  isSubmenu?: boolean;
  title?: string;
}
export const Navigation: FC<React.PropsWithChildren<NavigationProps>> = ({
  children,
  isSubmenu,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isSubmenu) {
    if (title)
      return (
        <li
          className="nav-item nav-item--menu"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {title}
          {isOpen && (
            <ul
              className={classNames('nav-submenu', {
                'nav-submenu--open': isOpen,
              })}
            >
              {children}
            </ul>
          )}
        </li>
      );
  }
  return <ul className="nav">{children}</ul>;
};
