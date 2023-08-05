import { dispatch } from "../../app/store";
import { setElevationData, createError } from "./elevationSlice";

const updateElevation = async () => {
    
    navigator.geolocation.getCurrentPosition(
        async (pos) => {
            if (!(pos.coords.altitude === null)) {
                const elevationData = {
                    elevation: pos.coords.altitude,
                    accuracy: pos.coords.altitudeAccuracy,
                };
                dispatch(setElevationData(elevationData));
            }
            else {
                dispatch(createError('Your device does not support altitude'))
            }
        },
        (err) => {
            console.error(err)
        }
    )
}

export default updateElevation