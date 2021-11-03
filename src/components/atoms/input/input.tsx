import { ChangeEvent, FC, ReactNode, useState } from 'react';

import styles from './input.module.css';

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
    <div className={styles.container}>
      <label>
        <span className={styles.label}>{label}</span>
        <span className={styles.inputWrapper}>
          <input
            className={styles.input}
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
