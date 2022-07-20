/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { FC } from 'react';
import './Navigation.scss';

interface NavigationProps {
  onItemClick: () => void;
}
export const Navigation: FC<React.PropsWithChildren<NavigationProps>> = ({
  children,
  onItemClick,
}) => {
  const childrenModified = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    return (
      <li className="nav-item" onClick={onItemClick}>
        {child}
      </li>
    );
  });
  return <ul className="nav">{childrenModified}</ul>;
};
