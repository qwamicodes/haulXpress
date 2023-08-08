import { View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { screenStyle } from "../../../constants";
import { HomeParamList } from "../../../types";
import {
  useAppDispatch,
  useAppSelector,
  useNavigationParams,
} from "../../../hooks";
import { resetSelection } from "../../../store/slices/haulSlice";
import { resetLocation } from "../../../store/slices/locationsSlice";

import Button from "../../../components/Button";
import HaulDriver from "../components/ConfirmHauling/HaulDriver";
import DriverEnRoute from "../components/ConfirmedHauling/DriverEnRoute";
import MiniMap from "../components/ConfirmHauling/MiniMap";

type props = NativeStackScreenProps<HomeParamList, "ConfirmedHauling">;

const ConfirmedHauling = ({ route }: props) => {
  const navigation = useNavigationParams();
  const dispatch = useAppDispatch();

  const location = useAppSelector((state) => state.locations);

  const { journey } = route.params;
  const { vehicle } = journey;

  const handleCompletedHauling = () => {
    //reset the state
    dispatch(resetSelection());
    dispatch(resetLocation());

    navigation.navigate("TabsStack", {
      screen: "Haul",
      params: { screen: "Start" },
    });
  };

  useEffect(() => {
    // navigation.reset({ routes: [{ name: "TabsStack" }] });
  }, []);

  return (
    <View style={[screenStyle, { flex: 1, justifyContent: "space-between" }]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <HaulDriver {...vehicle} />
        <DriverEnRoute />
        <MiniMap {...location} />
      </ScrollView>
      <View style={{ gap: 8 }}>
        <Button
          onPress={handleCompletedHauling}
          buttonText="go home"
          icon
          status="secondary"
        />
        <Button
          icon
          buttonText="view journeys"
          onPress={() =>
            navigation.navigate("TabsStack", {
              screen: "Journey",
              params: { screen: "Journeys" },
            })
          }
        />
      </View>
    </View>
  );
};

export default ConfirmedHauling;
