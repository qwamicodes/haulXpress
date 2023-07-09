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
import { useNavigationParams } from "../../hooks";

const Walkthrough = () => {
  const navigate = useNavigationParams();

  const renderItem = ({
    item,
    index,
  }: {
    item: IWalkThroughItem;
    index: number;
  }) => <WalkthroughItem key={index} {...item} />;

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
                      />
                    ))}
                </View>
                <View>
                  <Button
                    onPress={() => navigate("Login")}
                    buttonText="get started"
                    icon={false}
                  />
                </View>
              </View>
            );
          }}
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
