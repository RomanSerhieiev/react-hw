import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { charactersReducer, episodesReducer, locationsReducer } from './reducers';

const rootReducer = combineReducers({
    episodes: episodesReducer,
    characters: charactersReducer,
    locations: locationsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export {
    store
};