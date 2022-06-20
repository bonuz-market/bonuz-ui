import { FC } from 'react';
import './TabsSecondary.scss';

export const TabsSecondary: FC<React.PropsWithChildren> = ({ children }) => (
  <div className="tabs--secondary sticky">
    <div className="container">
      <ul>{children}</ul>
    </div>
  </div>
);
