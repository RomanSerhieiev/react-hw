import { charactersActionsTypes } from '../action';

const initialState = {
    prevPage: null,
    nextPage: null,
    characters: []
};

const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case charactersActionsTypes.SET_CHARACTERS:
            const characters = action.payload.results
                .map(character => ({
                    ...character,
                    episode: character.episode.map(episode => episode.split('/').slice(-1)[0]).join(',')
                }));

            return {
                ...state,
                prevPage: action.payload.info.prev,
                nextPage: action.payload.info.next,
                characters
            };
        default:
            return state;
    }
};

export {
    charactersReducer
};