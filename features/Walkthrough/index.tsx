import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppIntroSlider from "react-native-app-intro-slider";

import WalkthroughItem from "./components/WalkthroughItem";
import {
  DEFAULT_COLORS,
  screenStyle,
  walkthroughItems,
  centeringStyle,
} from "../../constants";
import { IWalkThroughItem } from "../../types";
import Button from "../../components/Button";

// const WIDTH = Dimensions.get("screen").width - 48;

const Walkthrough = () => {
  const renderItem = ({
    item,
    index,
  }: {
    item: IWalkThroughItem;
    index: number;
  }) => <WalkthroughItem key={index} index={index} {...item} />;

  return (
    <SafeAreaView
      style={[screenStyle, { paddingVertical: 16, paddingHorizontal: 0 }]}
    >
      <View style={{ flex: 1 }}>
        <AppIntroSlider
          bottomButton
          showPrevButton={true}
          renderPagination={(activeIndex: number) => {
            return (
              <View style={styles.paginationContainer}>
                <View style={styles.dotsContainer}>
                  {walkthroughItems.length > 1 &&
                    walkthroughItems.map((_, i) => (
                      <TouchableOpacity
                        key={i}
                        activeOpacity={0.8}
                        style={[
                          styles.dots,
                          i === activeIndex && styles.activeDot,
                        ]}
                        // onPress={() =>
                        //   AppIntroSlider?.prototype.goToSlide(i, true)
                        // }
                      />
                    ))}
                </View>
                <View>
                  <Button buttonText="get started" icon={false} />
                </View>
              </View>
            );
          }}
          renderNextButton={() => <Button buttonText="next" icon={false} />}
          renderDoneButton={() => (
            <Button buttonText="get started" icon={false} />
          )}
          showDoneButton={false}
          showNextButton={false}
          data={walkthroughItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
      </View>
    </SafeAreaView>
  );
};

export default Walkthrough;

const styles = StyleSheet.create({
  paginationContainer: {
    flex: 1,
    height: 150,
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
  },
  dotsContainer: { flex: 1, flexDirection: "row", gap: 10, ...centeringStyle },
  dots: {
    backgroundColor: DEFAULT_COLORS.gray[200],
    width: 10,
    height: 10,
    borderRadius: 100,
  },
  activeDot: { width: 40, backgroundColor: DEFAULT_COLORS.gray[700] },
});
