import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import MainNavigator from "./MainNavigator";

const Navigation = () => {
  return (
    <>
      <StatusBar style="dark" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default Navigation;