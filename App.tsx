import React from "react";
import { useFonts } from "expo-font";
import { LogBox } from "react-native";
import { StatusBar, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./src/store";
import theme from "./src/theme";
import Routes from "./src/routes";

const App = () => {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line global-require
    nunito: require("./src/assets/fonts/nunito.ttf"),
  });
  LogBox.ignoreLogs(["VirtualizedList"]);
  if (!fontsLoaded) return null;
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
              <Routes />
            </View>
          </ThemeProvider>
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
