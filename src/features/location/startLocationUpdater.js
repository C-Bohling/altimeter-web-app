import { dispatch } from '../../app/store';
import { setLocation, setError } from './locationSlice';
import { setElevationData, createError as createElevationError } from '../elevation/elevationSlice';

export const startLocationUpdater = async () => {
    // dispatch(setShowLoading(true));
    // navigator.geolocation.getCurrentPosition(updateLocation, locationErrorHandler);
    navigator.geolocation.watchPosition(updateLocation, locationErrorHandler);
    // dispatch(setShowLoading(false));
};

const updateLocation = (pos) => {
    console.log(pos);
    const coords = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        accuracy: pos.coords.accuracy,
    };
    dispatch(setLocation(coords));
    if (!(pos.coords.altitude === null)) {
        const elevationData = {
            elevation: pos.coords.altitude,
            accuracy: pos.coords.altitudeAccuracy,
        };
        dispatch(setElevationData(elevationData));
    } 
    else {
        dispatch(createElevationError('Your device does not support altitude'))
    }
};

const locationErrorHandler = (err) => {
    console.error(err);
    dispatch(setError(true));
};
