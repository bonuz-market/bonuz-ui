import { FC } from 'react';

interface TabProps {
  title?: string;
}

export const Tab: FC<React.PropsWithChildren<TabProps>> = ({ children }) => (
  <div>{children}</div>
);
