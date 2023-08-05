import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentLocation: { lat: 0, lng: 0 },
    accuracy: 0,
    hasPreviouslyLoaded: false,
    error: false,
};

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation(state, action) {
            // const coords = action.payload.coords
            // console.log(coords)
            state.currentLocation.lat = action.payload.lat;
            state.currentLocation.lng = action.payload.lng;
            state.accuracy = action.payload.accuracy;
            state.hasPreviouslyLoaded = true;
            state.error = false;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const { setLocation, setError } = locationSlice.actions;

export const selectLocation = (state) => state.location;

export const selectLocationData = (state) => ({
    location: state.location.currentLocation,
    hasPreviouslyLoaded: state.location.hasPreviouslyLoaded,
    error: state.location.error,
});

// export const selectAltitudeData = (state) => ({
//     altitude:
// })

export default locationSlice.reducer;
