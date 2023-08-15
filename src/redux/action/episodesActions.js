import { episodesService } from '../../services';

const episodesActionsTypes = {
    SET_EPISODES: 'SET_EPISODES'
};

const actions = {
    setEpisodes: (payload) => ({type: episodesActionsTypes.SET_EPISODES, payload})
};

const getEpisodes = (page) => async dispatch => {
    try {
        const {data} = await episodesService.getPage(page);
        dispatch(actions.setEpisodes(data));
    } catch (e) {

    }
};

const episodesActions = {
    getEpisodes
};

export {
    episodesActions,
    episodesActionsTypes
};