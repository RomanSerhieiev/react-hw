import { locationsActionsTypes } from '../action';

const initialState = {
    prevPage: null,
    nextPage: null,
    locations: []
};

const locationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case locationsActionsTypes.SET_LOCATIONS:
            const locations = action.payload.results
                .map(location => ({
                    ...location,
                    residents: location.residents.map(resident => resident.split('/').slice(-1)[0]).join(',')
                }));

            return {
                ...state,
                prevPage: action.payload.info.prev,
                nextPage: action.payload.info.next,
                locations
            };
        default:
            return state;
    }
};

export {
    locationsReducer
};