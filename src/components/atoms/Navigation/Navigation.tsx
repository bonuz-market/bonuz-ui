import React, { FC } from 'react';
import './Navigation.scss';

export const Navigation: FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const childrenModified = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    return <li className="nav-item">{child}</li>;
  });
  return <ul className="nav">{childrenModified}</ul>;
};
