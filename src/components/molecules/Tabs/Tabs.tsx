/* eslint-disable react/no-array-index-key */
import { FC, useState, ReactElement } from 'react';
import { TabTitle } from '../../atoms';
import './Tabs.scss';

type TabProps = {
  title: string;
};

export type TabsProps = {
  type?: 'primary' | 'secondary';
  children: ReactElement<TabProps>[] | ReactElement<TabProps>;
};

export const Tabs: FC<React.PropsWithChildren<TabsProps>> = ({ type, children }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleChangeActiveTab = (index: number) => {
    setActiveTab(index);
  };

  const getChildren = (): ReactElement<TabProps>[] => {
    if (Array.isArray(children)) {
      return children;
    }

    return [children];
  };

  return (
    <div className="tabs">
      <ul className="tabs-list">
        {getChildren().map((item, index) => (
          <TabTitle
            key={`${item.props.title}-${index}`}
            type={type}
            isActive={index === activeTab}
            title={item.props.title}
            onClick={() => handleChangeActiveTab(index)}
          />
        ))}
      </ul>
      <div className="content">{getChildren()[activeTab]}</div>
    </div>
  );
};
