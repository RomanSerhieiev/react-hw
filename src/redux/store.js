import { combineReducers, createStore } from 'redux';

import { episodesReducer } from './reducers';

const rootReducer = combineReducers({
    episodes: episodesReducer,
})

const store = createStore(rootReducer)

export {
    store
}