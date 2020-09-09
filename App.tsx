import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/home";
import OrderList from "./pages/orderList";

export type RootStackParamList = {
  Home: undefined;
  OrderList: {
    path?: string;
  };
};

const AuthStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="Home">
        <AuthStack.Screen name="Home" component={Home} />
        <AuthStack.Screen name="OrderList" component={OrderList} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
