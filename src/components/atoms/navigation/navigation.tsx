import React, { FC } from 'react';
import './navigation.scss';

export const Navigation: FC = ({ children }) => {
  const childrenModified = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    return <li className="nav-item">{child}</li>;
  });
  return <ul className="nav">{childrenModified}</ul>;
};
