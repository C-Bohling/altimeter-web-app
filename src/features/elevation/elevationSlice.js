import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Replace this with a call to the API
// const getElevationData = async () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => res(184), 1000);
//     });
// };

// export const loadElevation = createAsyncThunk('elevation/load', async () => {
//     const elevationData = await getElevationData();
//     return elevationData;
// });

const initialState = {
    elevation: null,
    accuracy: 0,
    loading: false,
    error: false,
    errorMsg: '',
};

const elevationSlice = createSlice({
    name: 'elevation',
    initialState: initialState,
    reducers: {
        setElevationData(state, action) {
            console.log('action.payload: ' + action.payload)
            state.elevation = action.payload.elevation;
            state.accuracy = action.payload.accuracy;
            state.loading = false;
            state.error = false;
            state.errorMsg = '';
        },
        createError(state, action) {
            state.loading = false
            state.error = true;
            state.errorMsg = action.payload;
        },
        setLoadingTrue(state) {
            state.loading = true;
        }
    },
});

export const { setElevationData, createError, setLoadingTrue } = elevationSlice.actions;

export const selectElevation = (state) => state.elevation;
export const selectElevationData = (state) => ({
    elevation: state.elevation.elevation,
    accuracy: state.elevation.accuracy,
    loading: state.elevation.loading,
    error: state.elevation.error,
    errorMsg: state.elevation.errorMsg,
});

export default elevationSlice.reducer;
