import { apiService } from './apiService';
import { urls } from '../constants';

const locationsService = {
    getPage: (page) => apiService.get(urls.locations.page, {params: {page}}),
    getById: (id) => apiService.get(urls.locations.id)
};

export {
    locationsService
};