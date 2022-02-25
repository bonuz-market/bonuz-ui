import { FC } from 'react';
import './TabsSecondary.scss';

export const TabsSecondary: FC = ({ children }) => (
  <div className="tabs--secondary sticky">
    <div className="container">
      <ul>{children}</ul>
    </div>
  </div>
);
