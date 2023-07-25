import { ScrollView, StyleSheet, Text, View, Platform } from "react-native";
import React, { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { vehicleType } from "../../../types/features/haul";
import { getVehiclesType } from "../../../services";
import { STRINGS, screenStyle } from "../../../constants";
import VehiclesLoading from "../../../components/Skeleton/VehiclesLoading";
import AvailableTruck from "../components/AvailableTrucks";

const AvailableTrucks = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();
  const haul = useAppSelector((state) => state.haul);
  const { results } = useAppSelector((state) => state.vehicles);

  useEffect(() => {
    const vehicleTypes: vehicleType[] = haul.vehicleType.reduce(
      (acc: vehicleType[], { value }) => {
        acc.push(value as vehicleType);
        return acc;
      },
      []
    );

    dispatch(getVehiclesType(vehicleTypes, setLoading));
  }, []);

  return (
    <View style={[screenStyle]}>
      {loading ? (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
          }}
        >
          {[1, 2, 3, 4, 5].map((_, index) => (
            <VehiclesLoading key={index} />
          ))}
        </ScrollView>
      ) : !loading && results.length < 0 ? (
        <View>
          <Text>{STRINGS.trucksNotFound}</Text>
        </View>
      ) : (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
        >
          {results.map((props, index) => (
            <AvailableTruck {...props} key={index} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default AvailableTrucks;

const styles = StyleSheet.create({});
