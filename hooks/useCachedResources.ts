import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { getUserAuthenticated } from "../services";
import { useAppDispatch } from "./store";

const useCachedResources = (): boolean => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          "NotoSans-Bold": require("../assets/fonts/NotoSans/NotoSans-Bold.ttf"),
          "NotoSans-SemiBold": require("../assets/fonts/NotoSans/NotoSans-SemiBold.ttf"),
          "NotoSans-Medium": require("../assets/fonts/NotoSans/NotoSans-Medium.ttf"),
          "NotoSans-Regular": require("../assets/fonts/NotoSans/NotoSans-Regular.ttf"),
          "NotoSans-Light": require("../assets/fonts/NotoSans/NotoSans-Light.ttf"),
        });

        //get user logged in from the google session
        dispatch(getUserAuthenticated());
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};

export default useCachedResources;
