import { updateDoc, doc, arrayUnion } from "firebase/firestore";

import { AppDispatch } from "../../../store";
import { addUserJourney, togglePending } from "../../../store/slices/authSlice";
import { IJourney, RootStackParamList } from "../../../types";
import { db } from "../../../config/firebase";
import { STRINGS } from "../../../constants";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const createJourney =
  (
    journey: IJourney,
    userId: string,
    navigation: NativeStackNavigationProp<RootStackParamList>
  ) =>
  async (dispatch: AppDispatch) => {
    dispatch(togglePending(true));

    try {
      await updateDoc(doc(db, "users", userId), {
        journey: arrayUnion(journey),
      }).then(() => {
        alert(STRINGS.successJourneyCreated);

        dispatch(addUserJourney(journey));

        navigation.navigate("TabsStack", {
          screen: "Haul",
          params: {
            screen: "ConfirmedHauling",
            //@ts-ignore
            params: { journey },
          },
        });
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(togglePending(false));
    }
  };

export default createJourney;
