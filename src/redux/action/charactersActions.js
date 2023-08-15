import { charactersService } from '../../services';

const charactersActionsTypes = {
    SET_CHARACTERS: 'SET_CHARACTERS'
};

const actions = {
    setCharacters: (payload) => ({type: charactersActionsTypes.SET_CHARACTERS, payload})
};

const getCharacters = (page) => async dispatch => {
    try {
        const {data} = await charactersService.getPage(page);
        dispatch(actions.setCharacters(data));
    } catch (e) {

    }
};

const charactersActions = {
    getCharacters
};

export {
    charactersActions,
    charactersActionsTypes
};