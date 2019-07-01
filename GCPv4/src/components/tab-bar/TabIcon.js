import React from "react";
import {Icon} from 'native-base'

const iconMap = {
  home: 'home',
  product: "box",
  order: "truck",
  other: "ellipsis-h"
};

const TabIcon = ({ name, color, style, ...props }) => {
  const iconName = iconMap[name];

  return <Icon style={[{ fontSize: 22, color }, style]} name={iconName} type='FontAwesome5'/>;
};

export default TabIcon;