import { ChangeEvent, FC, ReactNode, useState } from 'react';
import classnames from 'classnames';
import { Button } from '../button';
import './input.scss';

export type InputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  actionButton?: ReactNode;
  withDefaultActionButton?: boolean;
  defaultActionButtonLabel?: string;
  mobileColumn?: boolean;
  onChange?: (value: string) => void;
};

export const Input: FC<InputProps> = ({
  label,
  placeholder,
  value,
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
      })}
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        {label && !withDefaultActionButton && (
          <span className="input__label">{label}</span>
        )}
        <span className="input__wrapper">
          <input
            className="input__control"
            type="text"
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
