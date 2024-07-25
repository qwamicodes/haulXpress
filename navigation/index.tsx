import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import RootNavigator from './RootNavigator';
import { useAppSelector } from '../hooks';
import Loader from '../components/loader/Loader';

const Navigation = () => {
  const { pending } = useAppSelector(state => state.auth);

  return (
    <>
      <StatusBar style='dark' />
      {pending ? <Loader /> : false}
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default Navigation;
