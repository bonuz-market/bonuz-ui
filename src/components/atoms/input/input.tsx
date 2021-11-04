import { ChangeEvent, FC, ReactNode, useState } from 'react';

export type InputProps = {
  label: string;
  placeholder?: string;
  value?: string;
  actionButton?: ReactNode;
  onChange?: (value: string) => void;
};

export const Input: FC<InputProps> = ({
  label,
  placeholder,
  value,
  actionButton,
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
    <div className="input">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        <span className="input__label">{label}</span>
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
    </div>
  );
};
