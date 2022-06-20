import { FC } from 'react';
import './Subtitle.scss';

export const Subtitle: FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => <p className="subtitle">{children}</p>;
