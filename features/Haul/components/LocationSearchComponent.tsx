import { StyleSheet, View } from "react-native";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { GOOGLE_MAP_API_KEY } from "@env";
import { pick } from "lodash";
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";

import { DEFAULT_COLORS, textStyles } from "../../../constants";
import { useAppDispatch } from "../../../hooks";
import { locationComponentProp } from "../../../types/features/haul";
import { addLocation } from "../../../store/slices/locationsSlice";

type props = {
  locationComponent: locationComponentProp;
  setShowLocationComponent: Dispatch<SetStateAction<locationComponentProp>>;
};

const LocationSearchComponent = ({
  setShowLocationComponent,
  locationComponent,
}: props) => {
  const searchElement = useRef<GooglePlacesAutocompleteRef>(null);
  const dispatch = useAppDispatch();

  const handleSelectedLocation = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null
  ) => {
    //add location to the store
    const location = { name: data.description };

    dispatch(addLocation({ type: locationComponent.type, location }));

    //remove the component
    setShowLocationComponent({
      show: false,
      ...pick(locationComponent, "type"),
    });
  };

  useEffect(() => {
    searchElement.current?.focus();
  }, []);

  return (
    <View style={styles.contianer}>
      <GooglePlacesAutocomplete
        ref={searchElement}
        placeholder="Search..."
        query={{
          key: GOOGLE_MAP_API_KEY,
          language: "en",
        }}
        onPress={(data, details) => handleSelectedLocation(data, details)}
        textInputProps={styles.input}
      />
    </View>
  );
};

export default LocationSearchComponent;

const styles = StyleSheet.create({
  contianer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    flex: 1,
    backgroundColor: DEFAULT_COLORS.gray[50],
    paddingTop: 16,
  },
  input: {
    width: "100%",
    ...textStyles.sm.regular,
    color: DEFAULT_COLORS.gray[600],
  },
});
