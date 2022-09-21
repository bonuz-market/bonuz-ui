import { HTMLAttributes, useState } from 'react';
import classnames from 'classnames';
import { DropdownChevron } from '../Icons';
import './AccordionItem.scss';

export interface AccordionItemProps
  extends Pick<HTMLAttributes<'div'>, 'className' | 'style'> {
  title: string;
  iconSize?: number;
  open?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const AccordionItem = ({
  title,
  className,
  style,
  iconSize,
  onClick,
  open = false,
  children,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const isExpanded = open ?? isOpen;

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div
      className={classnames('accordion-item', className, {
        'accordion-item--open': isExpanded,
      })}
      style={style}
    >
      <button
        className="accordion-item__header"
        type="button"
        onClick={onClick ?? handleToggle}
      >
        <h5>{title}</h5>
        <DropdownChevron
          className="chevron"
          width={iconSize}
          height={iconSize}
        />
      </button>
      {isExpanded && <div className="accordion-item__content">{children}</div>}
    </div>
  );
};
