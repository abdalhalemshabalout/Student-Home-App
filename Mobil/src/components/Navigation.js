import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import Home_Screen from "../screens/Home_Screen";
import Login_Screen from "../screens/Login_Screen";
import Register_Screen from "../screens/Register_Screen";
import Start from "../screens/Start";
import Raporlar_Screen from "../screens/Raporlar_Screen";
import information from "../screens/information";
import Add_user_Screen from "../screens/Add_user_Screen";
import create_grop from "../screens/create_grop";
import grop_chat from "../screens/grop_chat";
import grop_info from "../screens/grop_info";
import grup_user_add from "../screens/grup_user_add";
import rapur_info from "../screens/rapur_info";
import deneme from "../screens/deneme";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home_Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="deneme"
          component={deneme}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="chat"
          component={grop_chat}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="rapur_info"
          component={rapur_info}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="grup_user_add"
          component={grup_user_add}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="grop_info"
          component={grop_info}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add_user_Screen"
          component={Add_user_Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="create_grop"
          component={create_grop}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="information"
          component={information}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login_Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Raporlar"
          component={Raporlar_Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register_Screen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
