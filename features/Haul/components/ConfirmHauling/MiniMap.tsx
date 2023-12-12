import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

import { useNavigationParams } from "../../../../hooks";
import { ILocation } from "../../../../types";

const MiniMap = ({
  destination,
  pickup,
}: Pick<ILocation, "destination" | "pickup">) => {
  const navigation = useNavigationParams();

  const locationMarkers = [pickup, destination];

  return (
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
        {locationMarkers.map(({ lat, lng, name }) => (
          <Marker
            key={name}
            coordinate={{ latitude: lat, longitude: lng }}
            title={name}
          />
        ))}
      </MapView>
    </TouchableOpacity>
  );
};

export default MiniMap;

const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: 200,
    overflow: "hidden",
    borderRadius: 24,
  },
  map: { width: "100%", height: "100%" },
});
