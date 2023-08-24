import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { episodesService } from '../../services';

const initialState = {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
    episodes: []
};

const getEpisodes = createAsyncThunk(
    'episodesSlice/getEpisodes',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodesService.getPage(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        } finally {

        }
    }
);

const slice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getEpisodes.fulfilled, (state, action) => {
            const {info: {count, pages, next, prev}, results} = action.payload;
            state.count = count;
            state.pages = pages;
            state.next = next;
            state.prev = prev;
            state.episodes = results.map(episode => ({
                ...episode,
                characters: episode.characters.map(character => character.split('/').slice(-1)[0]).join(',')
            }));
        })
});

    const {reducer: episodesReducer, actions} = slice;

const episodesActions = {
    ...actions,
    getEpisodes
};

export {
    episodesActions,
    episodesReducer
};