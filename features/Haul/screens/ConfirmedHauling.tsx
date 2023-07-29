import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MapView, { Marker } from "react-native-maps";

import { DEFAULT_COLORS, screenStyle, textStyles } from "../../../constants";
import { HomeParamList } from "../../../types";
import {
  useAppDispatch,
  useAppSelector,
  useNavigationParams,
} from "../../../hooks";
import { resetSelection } from "../../../store/slices/haulSlice";
import { resetLocation } from "../../../store/slices/locationsSlice";

import DriverBadge from "../components/DriverBadge";
import IconRenderer from "../../../components/Icon";
import Button from "../../../components/Button";

type props = NativeStackScreenProps<HomeParamList, "ConfirmedHauling">;

const ConfirmedHauling = ({ route }: props) => {
  const navigation = useNavigationParams();
  const dispatch = useAppDispatch();

  const { destination, pickup, duration } = useAppSelector(
    (state) => state.locations
  );
  const locationMarkers = [pickup, destination];

  const { driver } = route.params;

  const handleCompletedHauling = () => {
    //reset the state
    dispatch(resetSelection());
    dispatch(resetLocation());

    navigation.reset({ routes: [{ name: "TabsStack" }] });

    navigation.navigate("TabsStack", {
      screen: "Haul",
      params: { screen: "Start" },
    });
  };

  return (
    <View style={[screenStyle, { flex: 1, justifyContent: "space-between" }]}>
      <View>
        <View style={[styles.divider]}>
          <View style={styles.header}>
            <IconRenderer light={false} iconType="driver" />
            <Text style={styles.headerText}>Driver</Text>
          </View>
          <DriverBadge showButton driver={driver} />
        </View>
        <View style={[styles.divider]}>
          <View style={styles.header}>
            <IconRenderer light={false} iconType="route" />
            <Text style={styles.headerText}>Driver en route</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                color: DEFAULT_COLORS.gray[400],
                ...textStyles.xs.regular,
              }}
            >
              estimated time of arrival/pickup
            </Text>
            <Text
              style={{
                color: DEFAULT_COLORS.gray[700],
                ...textStyles["4xl"].bold,
              }}
            >
              {duration}
            </Text>
          </View>
          <View></View>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("TabsStack", {
              screen: "Haul",
              params: { screen: "MapView" },
            })
          }
          activeOpacity={0.8}
          style={styles.mapContainer}
        >
          <MapView
            provider="google"
            region={{
              latitude: pickup.lat,
              longitude: destination.lng,
              latitudeDelta: 0.3,
              longitudeDelta: 0.3,
            }}
            style={styles.map}
          >
            {locationMarkers.map(({ lat, lng, name }, index) => (
              <Marker
                key={index}
                coordinate={{ latitude: lat, longitude: lng }}
                title={name}
              />
            ))}
          </MapView>
        </TouchableOpacity>
      </View>
      <View style={{ gap: 8 }}>
        <Button
          onPress={handleCompletedHauling}
          buttonText="go home"
          icon
          type="secondary"
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

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", gap: 16 },
  headerText: { color: DEFAULT_COLORS.gray[700], ...textStyles.base.regular },
  divider: { paddingVertical: 24, gap: 16 },
  mapContainer: {
    width: "100%",
    height: 200,
    overflow: "hidden",
    borderRadius: 24,
  },
  map: { width: "100%", height: "100%" },
});
