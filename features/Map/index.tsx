import { StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';

import { useAppSelector, useNavigationParams } from '../../hooks';
import { DEFAULT_COLORS, screenStyle, centeringStyle } from '../../constants';
import { omit } from 'lodash';
import IconRenderer from '../../components/Icon';

const MapViewComponent = () => {
  const navigation = useNavigationParams();

  const { destination, pickup } = useAppSelector(state => state.locations);
  const locationMarkers = [pickup, destination];

  return (
    <View style={[omit(screenStyle, 'paddingHorizontal')]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
        style={styles.buttonContainer}
      >
        <IconRenderer iconType='arrowBack' light={false} />
      </TouchableOpacity>
      <MapView
        provider='google'
        region={{
          latitude: pickup.lat,
          longitude: destination.lng,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3,
        }}
        style={[styles.mapContainer]}
      >
        {locationMarkers.map(({ lat, lng, name }, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: lat, longitude: lng }}
            title={name}
          />
        ))}
      </MapView>
    </View>
  );
};

export default MapViewComponent;

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    width,
    height,
    zIndex: 50,
  },
  buttonContainer: {
    position: 'absolute',
    top: 50,
    left: 24,
    height: 40,
    width: 40,
    zIndex: 100,
    borderRadius: 12,
    backgroundColor: DEFAULT_COLORS.white,
    ...centeringStyle,
  },
});
