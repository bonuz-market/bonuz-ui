import { FC } from 'react';
import './title.scss';

export const Title: FC = ({ children }) => (
  <h2 className="title-component">{children}</h2>
);
