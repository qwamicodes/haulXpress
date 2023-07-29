import { AppDispatch } from "../../../store";
import { togglePending } from "../../../store/slices/authSlice";
import { IJourney } from "../../../types";

const createJourney = (journey: IJourney) => async (dispatch: AppDispatch) => {
  dispatch(togglePending(true));

  try {
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(togglePending(false));
  }
};

export default createJourney;
