import { locationsService } from '../../services';

const locationsActionsTypes = {
    SET_LOCATIONS: 'SET_LOCATIONS'
};

const actions = {
    setLocations: (payload) => ({type: locationsActionsTypes.SET_LOCATIONS, payload})
};

const getLocations = (page) => async dispatch => {
    const {data} = await locationsService.getPage(page);
    dispatch(actions.setLocations(data));
};

const locationsActions = {
    getLocations
};

export {
    locationsActions,
    locationsActionsTypes
};