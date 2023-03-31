import React, { useState } from "react";

import { View, Text } from "react-native";
import { Menu, MenuItem, MenuDivider, Image } from "react-native-material-menu";

export default function deneme() {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  return (
    <View
      style={{ height: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <Menu
        visible={visible}
        anchor={
          <Text onPress={showMenu} style={{ fontSize: 55, fontWeight: 900 }}>
            :
          </Text>
        }
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={hideMenu}>Profile</MenuItem>
        <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
        <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
      </Menu>
    </View>
  );
}
