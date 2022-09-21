import {
  HTMLAttributes,
  useState,
  Children,
  cloneElement,
  isValidElement,
  useMemo,
  useCallback,
} from 'react';
import cn from 'classnames';
import './Accordion.scss';

export interface AccordionProps
  extends Pick<HTMLAttributes<'div'>, 'className' | 'style'> {
  children?: React.ReactNode;
  isMultiOpen?: boolean;
}

export const Accordion = ({
  children: originalChildren,
  isMultiOpen,
  className,
  style,
}: AccordionProps) => {
  const children = Children.toArray(originalChildren);
  const [openItems, setOpenItems] = useState<number[]>([]);

  const isOpen = useCallback(
    (index: number) => openItems.includes(index),
    [openItems],
  );

  const onChildClick = useCallback(
    (itemIndex: number) => {
      if (isMultiOpen) {
        const newOpenItems = [...openItems];
        if (isOpen(itemIndex)) {
          const index = newOpenItems.indexOf(itemIndex);
          if (index > -1) {
            newOpenItems.splice(index, 1);
          }
        } else {
          newOpenItems.push(itemIndex);
        }
        setOpenItems(newOpenItems);
        return;
      }

      setOpenItems([itemIndex]);
    },
    [isOpen, openItems, isMultiOpen],
  );
  const childrenToRender = useMemo(
    () =>
      Children.map(children, (child, index) => {
        const orignalProps = isValidElement(child) && child.props;
        return cloneElement(child as React.ReactElement, {
          ...orignalProps,
          open: isOpen(index),
          onClick: () => onChildClick(index),
          // eslint-disable-next-line react/no-array-index-key
          key: index,
        });
      }),
    [children, isOpen, onChildClick],
  );

  return (
    <div className={cn('accordion', className)} style={style}>
      {children && childrenToRender}
    </div>
  );
};
