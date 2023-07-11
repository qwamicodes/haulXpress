import React from "react";

import ScreenTemplate from "../../screens/template/ScreenTemplate";
import { useAppSelector, useNavigationParams } from "../../hooks";
import HaulerHeader from "./components/HaulerHeader";

const Hauler = () => {
  const navigate = useNavigationParams();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <ScreenTemplate>
      <HaulerHeader />
    </ScreenTemplate>
  );
};

export default Hauler;
