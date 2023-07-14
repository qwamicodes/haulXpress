import { StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import SwiperFlatList from "react-native-swiper-flatlist";

import { useAppSelector } from "../../hooks";

import ScreenTemplate from "../../screens/template/ScreenTemplate";
import HaulHeader from "./components/HaulHeader";
import HaulStart from "./components/HaulStart";
import { haulSelectionData } from "../../constants";

const Haul = () => {
  const { user } = useAppSelector((state) => state.auth);
  const haulState = useAppSelector((state) => state.haul);

  const scrollRef = useRef<SwiperFlatList>(null);

  const handleScrollToIndex = (index: number) => {
    scrollRef.current?.scrollToIndex({ index });
  };

  return (
    <ScreenTemplate>
      <HaulHeader />
      <View style={styles.startContainer}>
        <SwiperFlatList ref={scrollRef}>
          {haulSelectionData.map((props, index) => (
            <HaulStart key={index} {...props} {...haulState} />
          ))}
        </SwiperFlatList>
      </View>
    </ScreenTemplate>
  );
};

export default Haul;

const styles = StyleSheet.create({
  startContainer: { flex: 1 },
});
