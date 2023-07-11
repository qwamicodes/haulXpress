import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ScreenTemplate from "../template/ScreenTemplate";
import { useAppSelector } from "../../hooks";

const Home = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <ScreenTemplate>
      <Text>You're logged in </Text>
    </ScreenTemplate>
  );
};

export default Home;

const styles = StyleSheet.create({});
