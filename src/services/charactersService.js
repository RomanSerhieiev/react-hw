import { apiService } from './apiService';
import { urls } from '../constants';

const charactersService = {
    getPage: (page) => apiService.get(urls.characters.page, {params: {page}}),
    getById: (id) => apiService.get(urls.characters.id)
};

export {
    charactersService
};