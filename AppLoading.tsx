import * as SplashScreen from "expo-splash-screen";
import { Fragment, ReactNode, useEffect } from "react";
import { useCachedResources } from "./hooks";
import CustomSplashScreen from "./screens/splash";

SplashScreen.preventAutoHideAsync();

export const AppLoading = ({ children }: { children: ReactNode }) => {
  const isLoadingComplete = useCachedResources();

  useEffect(() => {
    if (isLoadingComplete) {
      SplashScreen.hideAsync();
    }
  }, [isLoadingComplete]);

  if (!isLoadingComplete) {
    return <CustomSplashScreen />;
  }

  return <Fragment>{children}</Fragment>;
};
