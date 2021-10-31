import { ChangeEvent, FC, useState } from 'react';

export type CheckboxProps = {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export const Checkbox: FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const [defaultChecked, setChecked] = useState(checked || false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    if (onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        checked={defaultChecked}
        onChange={handleChange}
        id="rememberMe"
      />
      <label className="checkbox" htmlFor="rememberMe" />
      <label className="checkbox-text" htmlFor="rememberMe">
        {label}
      </label>
    </div>
  );
};
