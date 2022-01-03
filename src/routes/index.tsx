import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import Login from "../pages/Login/Login";
import Tabs from "./Tabs";

export type StackParams = {
  Login: undefined;
  Tabs: undefined;
};

const Main = createNativeStackNavigator<StackParams>();

const Routes = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      <Main.Screen name="Login" component={Login} />
      <Main.Screen name="Tabs" component={Tabs} />
    </Main.Navigator>
  );
};

export default Routes;
