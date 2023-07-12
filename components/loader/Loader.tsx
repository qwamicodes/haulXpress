import { StyleSheet, Image, View, Dimensions } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import * as Animatable from "react-native-animatable";

import { DEFAULT_COLORS } from "../../constants";

const Loader = () => {
  return (
    <View style={styles.loaderContainer}>
      <Animatable.View
        style={styles.imageLoader}
        iterationCount="infinite"
        animation="rotate"
      >
        <Svg viewBox="0 0 900 900">
          <Path
            fill={DEFAULT_COLORS.white}
            d="M579 275.1c-8 .4-27.8 1.3-44 1.9-16.2.6-31.7 1.5-34.5 2-2.7.5-20.1 1.1-38.5 1.5-18.4.3-35.3 1-37.5 1.5-2.2.6-16.1 1.1-30.8 1.2-22.5.3-26.9.5-27.7 1.8-.6.9-1 25.1-1 60.6 0 46.1-.3 59.4-1.2 60.2-.8.6-11.2 1.1-26.5 1.3-22.8.3-25.4.2-27-1.3-1.5-1.6-1.7-6-1.4-56.6.2-46.7 0-55-1.2-56-1.1-.9-16.9-1.2-64.8-1l-63.4.3-.3 165.5c-.1 91 0 166.5.3 167.7l.5 2.3h63.5c49.6 0 63.6-.3 64.2-1.3.4-.6.8-26.2.8-56.7v-55.4l2.5-1.3c1.9-1.1 8-1.2 27.4-.8 13.7.3 25.3.8 25.7 1.1.5.3.9 25.4.9 55.9 0 30.4.3 56 .6 56.9.6 1.5 17 1.6 175.9 1.6 146.5 0 175.4-.2 176.4-1.4.8-1 1-26.9.9-96.2l-.3-94.9-4.5-.7c-2.5-.4-11.5-1-20-1.3-8.5-.4-19.3-1.3-24-2.1-4.7-.8-11.4-1.4-15-1.4-10.6-.1-46.7-4.5-48.4-5.9-1.4-1.2-1.6-9.8-1.8-75.5l-.3-74.1-5.5-.1c-3-.1-12 .2-20 .7zm-2.2 44.1c1.7 1.7 1.7 110.9 0 112.6-.9.9-17.8 1.2-70 1.2H438l-1.4-2.3c-1.2-1.8-1.4-10.7-1.6-51.5-.1-47.1.3-56.1 2.8-56.3.4 0 7.9-.2 16.7-.4 8.8-.3 23.4-.9 32.5-1.5 14.7-1 55-2.4 79.6-2.8 5.8-.1 9.4.2 10.2 1z"
          />
        </Svg>
      </Animatable.View>
    </View>
  );
};

export default Loader;

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#1f2937f2",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    width,
    height,
  },
  imageLoader: {
    width: 100,
    height: 100,
    position: "absolute",
    zIndex: 99,
  },
});
