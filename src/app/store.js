import { configureStore } from '@reduxjs/toolkit';
import locationReducer from '../features/location/locationSlice';
import elevationReducer from '../features/elevation/elevationSlice';

const store = configureStore({
    reducer: {
        location: locationReducer,
        elevation: elevationReducer,
    },
});

export const dispatch = store.dispatch;

export default store;