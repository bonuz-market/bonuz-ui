/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import classNames from 'classnames';
import React, { CSSProperties, FC, useCallback, useRef, useState } from 'react';
import { DropdownChevron } from '../Icons';
import { useOnClickOutside } from './hooks/useOnClickOutside';
import './Navigation.scss';

interface NavigationProps {
  isSubmenu?: boolean;
  isMegaMenu?: boolean;
  isOpen?: boolean;
  title?: string;
  className?: string;
  style?: CSSProperties;
}
export const Navigation: FC<React.PropsWithChildren<NavigationProps>> = ({
  children,
  isSubmenu,
  isMegaMenu,
  isOpen,
  title,
  className,
  style,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const isExpanded = isOpen || isOpened;
  const navItemRef = useRef<HTMLLIElement>(null);
  const toggleOpen = useCallback(() => setIsOpened(false), []);

  useOnClickOutside(navItemRef, toggleOpen);

  if (isSubmenu || isMegaMenu) {
    if (title)
      return (
        <li
          className={classNames('nav-item', className, {
            'nav-item--menu': isSubmenu,
          })}
          ref={navItemRef}
          style={style}
        >
          <div
            onClick={() => setIsOpened((prevState) => !prevState)}
            role="button"
            className="nav-item__title"
          >
            {title}{' '}
            <DropdownChevron width={16} height={16} className="chevron" />
          </div>
          {isExpanded && (
            <ul
              className={classNames({
                'nav-submenu': isSubmenu,
                'nav-megamenu': isMegaMenu,
              })}
            >
              {children}
            </ul>
          )}
        </li>
      );
  }
  return (
    <ul className={classNames('nav', className)} style={style}>
      {children}
    </ul>
  );
};
