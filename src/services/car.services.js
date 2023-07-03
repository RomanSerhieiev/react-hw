import {axiosServiceCar} from "./axios.service";
import {carUrls} from "../configs/urls";

export const carService = {
    getAll: () => axiosServiceCar.get(carUrls.cars),
    create: (car) => axiosServiceCar.post(carUrls.cars, car),
    getById: (id) => axiosServiceCar.get(`${carUrls.cars}/${id}`),
    updateById: (id, car) => axiosServiceCar.put(`${carUrls.cars}/${id}`, car),
    deleteById: (id) => axiosServiceCar.delete(`${carUrls.cars}/${id}`)
}