import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { locationsService } from '../../services';

const initialState = {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
    locations: []
};

const getLocations = createAsyncThunk(
    'locationsSlice/getLocations',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await locationsService.getPage(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        } finally {

        }
    }
);

const slice = createSlice({
    name: 'locationsSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getLocations.fulfilled, (state, action) => {
            const {info: {count, pages, next, prev}, results} = action.payload;
            state.count = count;
            state.pages = pages;
            state.next = next;
            state.prev = prev;
            state.locations = results.map(location => ({
                ...location,
                residents: location.residents.map(resident => resident.split('/').slice(-1)[0]).join(',')
            }));
        })
});

const {reducer: locationsReducer, actions} = slice;

const locationsActions = {
    ...actions,
    getLocations
};

export {
    locationsActions,
    locationsReducer
};