import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { useAppSelector } from "../../hooks";

import ScreenTemplate from "../../screens/template/ScreenTemplate";
import HaulHeader from "./components/HaulHeader";
import HaulStart from "./components/HaulStart";

const Haul = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <ScreenTemplate>
      <HaulHeader />
      <HaulStart />
    </ScreenTemplate>
  );
};

export default Haul;

const styles = StyleSheet.create({});
