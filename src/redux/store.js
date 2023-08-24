import { configureStore } from '@reduxjs/toolkit';

import { charactersReducer, episodesReducer, locationsReducer } from './slices';

const store = configureStore({
    reducer: {
        episodes: episodesReducer,
        characters: charactersReducer,
        locations: locationsReducer
    }
})

export {
    store
};