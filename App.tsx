import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import store from "./store";
import Navigation from "./navigation";

import { AppLoading } from "./components/AppLoading";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppLoading>
          <Navigation />
        </AppLoading>
      </Provider>
    </SafeAreaProvider>
  );
}
