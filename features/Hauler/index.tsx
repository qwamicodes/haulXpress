import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ScreenTemplate from "../../screens/template/ScreenTemplate";
import { useAppSelector, useNavigationParams } from "../../hooks";
import HaulerHeader from "./components/HaulerHeader";
import ScreenHeaderTitle from "../../components/header/ScreenHeaderTitle";

const Hauler = () => {
  const navigate = useNavigationParams();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <ScreenTemplate>
      <ScreenHeaderTitle title="hauler" />
      <HaulerHeader />
    </ScreenTemplate>
  );
};

export default Hauler;

const styles = StyleSheet.create({});
