import { AppDispatch } from "../../../store";
import { GOOGLE_MAP_API_KEY } from "@env";
import { locationType } from "../../../types";
import { addLocation } from "../../../store/slices/locationsSlice";

const getGeoCoordinates =
  (placeId: string, type: locationType) => async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${GOOGLE_MAP_API_KEY}`
      );
      const data = await response.json();
      const { lat, lng } = data.results[0].geometry.location;

      dispatch(addLocation({ type, location: { lat, lng } }));
    } catch (error) {
      console.error(error);
    }
  };

export default getGeoCoordinates;
