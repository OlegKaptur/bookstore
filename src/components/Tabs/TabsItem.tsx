import React from "react";
import cn from "classnames";

import Button from "components/Button/Button";
import { Tab } from "./Tabs";
import styles from "./Tabs.module.css";

interface TabItemProps {
  tab: Tab;
  onTabClick: (tab: Tab) => void;
  className?: string;
}

const TabItem: React.FC<TabItemProps> = ({ tab, onTabClick, className }) => {
  const handleClick = () => onTabClick(tab);

  return (
    <li>
      <Button className={cn(styles.button, className)} onClick={handleClick}>
        {tab.label}
      </Button>
    </li>
  );
};

export default TabItem;
