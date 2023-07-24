import { GOOGLE_MAP_API_KEY } from "@env";

import { AppDispatch } from "../../../store";
import { addDistance } from "../../../store/slices/locationsSlice";
import { kmToMiles } from "../../../utils/helpers";

const getMapDistance =
  (origins: string, destinations: string) => async (dispatch: AppDispatch) => {
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origins}&destinations=${destinations}&key=${GOOGLE_MAP_API_KEY}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      // Extract distance information from the response
      const distanceText = data.rows[0].elements[0].distance.value;

      dispatch(addDistance(kmToMiles(distanceText)));
    } catch (err) {}
  };

export default getMapDistance;
