import { FC } from 'react';
import './tab.scss';

export type TabProps = {
  title: string;
};

export const Tab: FC<TabProps> = ({ children }) => <div>{children}</div>;
