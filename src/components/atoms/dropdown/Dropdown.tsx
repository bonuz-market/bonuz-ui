import React, { FC } from 'react';
import './dropdown.style.scss';
import classnames from 'classnames';

export type DropdownProps = {
  options: { label: string; target: string }[];
  selectedIndex: number;
};
export const Dropdown: FC<DropdownProps> = ({ options, selectedIndex }) => {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const [isSelected, setIsSelected] = React.useState<number>(selectedIndex);
  const [selectedOption, setSelectedOption] = React.useState<string>(
    options[selectedIndex].label,
  );
  return (
    <div className="dropdown">
      <div
        className={classnames('dropdown__wrapper', { active: isActive })}
        onClick={() => setIsActive(!isActive)}
        onKeyUp={() => setIsActive(!isActive)}
        role="button"
        tabIndex={0}
      >
        <ul className=" dropdown__list">
          <li>{selectedOption}</li>
          <ul className={classnames('dropdown__options', { active: isActive })}>
            {options.map((item, index) => (
              <li className="dropdown__option" key={item.label}>
                <a
                  className={classnames({ selected: isSelected === index })}
                  onClick={() => {
                    setIsSelected(index);
                    setSelectedOption(item.label);
                    setIsActive(!isActive);
                  }}
                  href={item.target}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
};
