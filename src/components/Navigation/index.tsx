import React, { ElementType } from "react";

import { NavigationMenu, Tab, TabName } from "./styles";

export const Navigation = (props: {
  list: Array<{
    name: string;
    component: ElementType;
    icon: ElementType;
  }>;
  active: string;
  callback: Function;
}) => {
  const { list, active, callback } = props;
  return (
    <NavigationMenu len={list.length}>
      {list.map((item) => (
        <Tab
          active={active === item.name}
          onClick={() => callback(<item.component />, item.name)}
        >
          <item.icon />
          <TabName> {item.name} </TabName>
        </Tab>
      ))}
    </NavigationMenu>
  );
};
