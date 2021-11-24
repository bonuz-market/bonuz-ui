import { FC } from 'react';
import './subtitle.scss';

export const Subtitle: FC = ({ children }) => (
  <p className="subtitle">{children}</p>
);
