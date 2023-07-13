import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabsParamList } from "../types/navigation";

import BottomTab from "../components/bottomTab";
import HaulerNavigation from "./HaulerNavigation";
import HaulNavigation from "./HaulNavigation";
import JourneyNavigation from "./JourneyNavigation";

const TabsNavigator = () => {
  const { Navigator, Screen } = createBottomTabNavigator<TabsParamList>();
  return (
    <Navigator
      initialRouteName="Haul"
      tabBar={(props) => <BottomTab {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Haul" component={HaulNavigation} />
      <Screen name="Journey" component={JourneyNavigation} />
      <Screen
        name="Hauler"
        component={HaulerNavigation}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default TabsNavigator;
