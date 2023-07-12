import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabsParamList } from "../types/navigation";

import Home from "../screens/Authenticated/Home";
import Journey from "../features/Journey";
import Hauler from "../features/Hauler";
import BottomTab from "../components/bottomTab";
import ScreenHeaderTitle from "../components/header/ScreenHeaderTitle";
import HaulerNavigation from "./HaulerNavigation";

const TabsNavigator = () => {
  const { Navigator, Screen } = createBottomTabNavigator<TabsParamList>();
  return (
    <Navigator
      initialRouteName="Hauler"
      tabBar={(props) => <BottomTab {...props} />}
    >
      <Screen name="Map" component={Home} />
      <Screen name="Journey" component={Journey} />
      <Screen
        name="Hauler"
        component={HaulerNavigation}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default TabsNavigator;
