import { FC } from 'react';

export type TabProps = {
  title: string;
};

export const Tab: FC<TabProps> = ({ children }) => <div>{children}</div>;
