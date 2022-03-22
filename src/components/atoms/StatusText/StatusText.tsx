/* eslint-disable consistent-return */
import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import './StatusText.scss';

export type StatusTextProps = {
  message: string;
  type: 'success' | 'error' | 'warning' | '';
  alwaysVisible?: boolean;
  timeout?: number;
};
export const StatusText: FC<StatusTextProps> = ({
  message,
  type,
  alwaysVisible,
  timeout = 5000,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!message) {
      setIsVisible(false);
      return;
    }
    setIsVisible(true);
    if (alwaysVisible) return;
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [message, type, alwaysVisible]);
  if (!isVisible) return null;
  return (
    <div
      className={classNames('status-box', {
        success: type === 'success',
        error: type === 'error',
        warning: type === 'warning',
      })}
    >
      {message}
    </div>
  );
};
