import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { charactersService } from '../../services';

const initialState = {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
    characters: []
};

const getCharacters = createAsyncThunk(
    'charactersSlice/getCharacters',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await charactersService.getPage(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        } finally {

        }
    }
);

const slice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getCharacters.fulfilled, (state, action) => {
            const {info: {count, pages, next, prev}, results} = action.payload;
            state.count = count;
            state.pages = pages;
            state.next = next;
            state.prev = prev;
            state.characters = results.map(character => ({
                ...character,
                episode: character.episode.map(episode => episode.split('/').slice(-1)[0]).join(',')
            }));
        })
});

const {reducer: charactersReducer, actions} = slice;

const charactersActions = {
    ...actions,
    getCharacters
};

export {
    charactersActions,
    charactersReducer
};