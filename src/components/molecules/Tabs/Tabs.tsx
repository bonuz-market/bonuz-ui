/* eslint-disable react/no-array-index-key */
import { FC, useState, Children, isValidElement } from 'react';
import { TabTitle } from '../../atoms';
import './Tabs.scss';

export type TabsProps = {
  type?: 'primary' | 'secondary';
};

export const Tabs: FC<React.PropsWithChildren<TabsProps>> = ({
  type,
  children,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleChangeActiveTab = (index: number) => {
    setActiveTab(index);
  };
  const childrenArray = Children.toArray(children);
  return (
    <div className="tabs">
      <ul className="tabs-list">
        {childrenArray.map((item, index) => {
          if (!isValidElement(item)) {
            return item;
          }
          return (
            <TabTitle
              key={`${item.props.title}-${index}`}
              type={type}
              isActive={index === activeTab}
              title={item.props.title}
              onClick={() => handleChangeActiveTab(index)}
            />
          );
        })}
      </ul>
      <div className="content">{childrenArray[activeTab]}</div>
    </div>
  );
};
