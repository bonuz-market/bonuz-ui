import { FC } from 'react';
import './TabsSecondary.scss';

export const TabsSecondary: FC = ({ children }) => (
  <div className="tabs--secondary sticky">
    <ul>{children}</ul>
  </div>
);
