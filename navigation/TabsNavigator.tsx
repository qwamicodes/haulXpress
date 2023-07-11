import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabsParamList } from "../types/navigation";

import Home from "../screens/Authenticated/Home";
import Journey from "../features/Journey";
import Hauler from "../features/Hauler";
import BottomTab from "../components/bottomTab";

const TabsNavigator = () => {
  const { Navigator, Screen } = createBottomTabNavigator<TabsParamList>();
  return (
    <Navigator tabBar={(props) => <BottomTab {...props} />}>
      <Screen name="Map" component={Home} />
      <Screen name="Journey" component={Journey} />
      <Screen
        name="Hauler"
        component={Hauler}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default TabsNavigator;
