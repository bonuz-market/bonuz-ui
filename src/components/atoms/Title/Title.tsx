import { FC } from 'react';
import './Title.scss';

export const Title: FC<React.PropsWithChildren<unknown>> = ({ children }) => (
  <h2 className="title-component">{children}</h2>
);
