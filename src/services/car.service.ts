import { apiService } from './api.service';
import { urls } from '../constants';
import { ICar } from '../interfaces';

const carService = {
    get: () => apiService.get<ICar[]>(urls.cars.base),
    getById: (id: number) => apiService.get<ICar>(urls.cars.byId(id)),
    post: (car: ICar) => apiService.post<ICar>(urls.cars.base, car),
    put: (id: number, car: ICar) => apiService.put<ICar>(urls.cars.byId(id), car),
    patch: (id: number, fields: Partial<ICar>) => apiService.patch<Partial<ICar>>(urls.cars.byId(id), fields),
    delete: (id: number) => apiService.delete(urls.cars.byId(id))
}

export {
    carService
}