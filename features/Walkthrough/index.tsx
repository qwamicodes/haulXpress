import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";

import ScreenTemplate from "../../screens/template/ScreenTemplate";
import WalkthroughItem from "./components/WalkthroughItem";
import { walkthroughItems } from "../../constants";
import { IWalkThroughItem } from "../../types";

const WIDTH = Dimensions.get("screen").width - 48;

const Walkthrough = () => {
  const renderItem = ({
    item,
    index,
  }: {
    item: IWalkThroughItem;
    index: number;
  }) => <WalkthroughItem key={index} index={index} {...item} />;

  return (
    <ScreenTemplate>
      <View style={{ flex: 1, paddingVertical: 16 }}>
        <Carousel
          data={walkthroughItems}
          renderItem={renderItem}
          sliderWidth={WIDTH}
          itemWidth={WIDTH}
        />

        {/* {walkthroughItems.map((walkthrough, index) => ( */}
        {/* <WalkthroughItem
          index={0}
          //  key={index}
          {...walkthroughItems[0]}
        /> */}
        {/* ))} */}
      </View>
    </ScreenTemplate>
  );
};

export default Walkthrough;

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
