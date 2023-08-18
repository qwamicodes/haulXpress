import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import { Fragment, ReactNode, useEffect } from "react";
import { useCachedResources } from "./hooks";

preventAutoHideAsync();

export const AppLoading = ({ children }: { children: ReactNode }) => {
  const isLoadingComplete = useCachedResources();

  useEffect(() => {
    if (isLoadingComplete) {
      hideAsync();
    }
  }, [isLoadingComplete]);

  if (!isLoadingComplete) {
    return null;
  }

  return <Fragment>{children}</Fragment>;
};
