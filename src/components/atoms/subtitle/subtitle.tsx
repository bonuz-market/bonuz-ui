import { FC } from 'react';
import './Subtitle.scss';

export const Subtitle: FC = ({ children }) => (
  <p className="subtitle">{children}</p>
);
