import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeScreen from "../pages/Home/Home";
import SearchScreen from "../pages/Search/Search";
import ProfileScreen from "../pages/Profile/Profile";

export type TabsParams = {
  Home: undefined;
  Profile: undefined;
  Search: undefined;
};

const Tab = createMaterialBottomTabNavigator<TabsParams>();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fd0"
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Search",
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
