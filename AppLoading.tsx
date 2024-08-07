import * as SplashScreen from 'expo-splash-screen';
import { ReactNode, useEffect } from 'react';
import { useCachedResources } from './hooks';

SplashScreen.preventAutoHideAsync();

export const AppLoading = ({ children }: { children: ReactNode }) => {
  const isLoadingComplete = useCachedResources();

  useEffect(() => {
    if (isLoadingComplete) {
      SplashScreen.hideAsync();
    }
  }, [isLoadingComplete]);

  if (!isLoadingComplete) return null;

  return <>{children}</>;
};
