import React from "react";
import { Text, View } from "react-native";
import { DrawerNavigator } from "react-navigation";

import HomeScreen from "./src/screens/HomeScreen";
import NotificationTest from './src/screens/NotificationTest';

const App = new DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  NotificationTest: {
    screen: NotificationTest
  }
})

export default App;
