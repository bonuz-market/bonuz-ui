import { ChangeEvent, FC, ReactNode, useState } from 'react';
import classnames from 'classnames';
import { Button } from '../Button';
import './Input.scss';

export type InputProps = {
  label?: string;
  secondary?: boolean;
  placeholder?: string;
  icon?: ReactNode;
  value?: string;
  type?: string;
  actionButton?: ReactNode;
  withDefaultActionButton?: boolean;
  defaultActionButtonLabel?: string;
  mobileColumn?: boolean;
  onChange?: (value: string) => void;
};

export const Input: FC<InputProps> = ({
  label,
  secondary,
  placeholder,
  icon,
  value,
  type,
  actionButton,
  withDefaultActionButton,
  defaultActionButtonLabel,
  mobileColumn,
  onChange,
}) => {
  const [defaultValue, setValue] = useState<string>(value || '');

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div
      className={classnames('input', {
        'input--action-btn': withDefaultActionButton,
        'input--mobile-column': mobileColumn,
        'input--secondary': secondary,
        'input--icon': icon,
      })}
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        {label && !withDefaultActionButton && (
          <span className="input__label">{label}</span>
        )}
        <span className="input__wrapper">
          {icon && <span className="input__icon">{icon}</span>}
          <input
            className="input__control"
            type={type || 'text'}
            placeholder={placeholder}
            value={defaultValue}
            onChange={handleChangeInput}
          />
          {actionButton}
        </span>
      </label>
      {withDefaultActionButton && <Button>{defaultActionButtonLabel}</Button>}
    </div>
  );
};
