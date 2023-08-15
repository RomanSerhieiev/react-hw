import { apiService } from './apiService';
import { urls } from '../constants';

const episodesService = {
    getPage: (page) => apiService.get(urls.episodes.page, {params: {page}}),
    getById: (id) => apiService.get(urls.episodes.id, {params: {id}})
};

export {
    episodesService
};