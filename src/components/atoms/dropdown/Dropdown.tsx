import React, { FC, useEffect } from 'react';
import './dropdown.style.scss';
import classnames from 'classnames';

export type DropdownProps = {
  selected?: string;
};
export type DropdownControlledProps = {
  selected: string;
};
const DropdownControlled: FC<DropdownControlledProps> = ({
  children,
  selected,
}) => {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const [selectedOption, setSelectedOption] = React.useState<string>(selected);

  const childrenModified = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    return (
      <li className="dropdown__option">
        {React.cloneElement(child, {
          onClick: () => {
            setSelectedOption(child.props.children);
            setIsActive(!isActive);
            child.props.onClick?.();
          },
        })}
      </li>
    );
  });
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
            {childrenModified}
          </ul>
        </ul>
      </div>
    </div>
  );
};
const DropdownUnControlled: FC<DropdownProps> = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selected, setSelected] = React.useState('');
  const childrenModified = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    return (
      <li className="dropdown__option">
        {React.cloneElement(child, {
          onClick: () => {
            setSelected(child.props.children);
            setSelectedIndex(index);
            child.props.onClick?.();
          },
        })}
      </li>
    );
  });
  useEffect(() => {
    const options = React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return null;
      }
      return child.props.children;
    });
    if (options) {
      setSelected(options[selectedIndex]);
    }
  }, [selectedIndex]);
  return selected ? (
    <DropdownControlled selected={selected}>
      {childrenModified}
    </DropdownControlled>
  ) : null;
};

export const Dropdown: FC<DropdownProps> = ({ children, selected }) =>
  selected ? (
    <DropdownControlled selected={selected}>{children}</DropdownControlled>
  ) : (
    <DropdownUnControlled>{children}</DropdownUnControlled>
  );
