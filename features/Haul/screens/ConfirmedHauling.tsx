import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { DEFAULT_COLORS, screenStyle, textStyles } from "../../../constants";
import { HomeParamList } from "../../../types";
import { useAppDispatch, useNavigationParams } from "../../../hooks";
import { resetSelection } from "../../../store/slices/haulSlice";
import { resetLocation } from "../../../store/slices/locationsSlice";

import DriverBadge from "../components/DriverBadge";
import IconRenderer from "../../../components/Icon";
import Button from "../../../components/Button";

type props = NativeStackScreenProps<HomeParamList, "ConfirmedHauling">;

const ConfirmedHauling = ({ route }: props) => {
  const navigation = useNavigationParams();
  const dispatch = useAppDispatch();

  const { driver } = route.params;

  const handleCompletedHauling = (type: "home" | "journey") => {
    //reset the state
    dispatch(resetSelection());
    dispatch(resetLocation());

    if (type === "home") {
      //return to the start hauling screen
      return navigation.navigate("TabsStack", {
        screen: "Haul",
        params: { screen: "Start" },
      });
    }

    return navigation.navigate("TabsStack", {
      screen: "Journey",
      params: { screen: "Journeys" },
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
              35mins
            </Text>
          </View>
          <View></View>
        </View>
        <View>{/* Map view with the coordinates */}</View>
      </View>
      <View style={{ gap: 8 }}>
        <Button
          onPress={() => handleCompletedHauling("home")}
          buttonText="go home"
          icon
          type="secondary"
        />
        <Button
          icon
          buttonText="view journeys"
          onPress={() => handleCompletedHauling("journey")}
        />
      </View>
    </View>
  );
};

export default ConfirmedHauling;

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", gap: 16 },
  headerText: { color: DEFAULT_COLORS.gray[700], ...textStyles.base.regular },
  divider: { paddingVertical: 24, gap: 24 },
});
