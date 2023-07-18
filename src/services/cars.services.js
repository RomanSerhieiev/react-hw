import {axiosServiceCar} from "./axios.service";
import {carsUrls} from "../configs/urls";

export const carService = {
    getAll: () => axiosServiceCar.get(carsUrls.cars),
    create: (car) => axiosServiceCar.post(carsUrls.cars, car),
    getById: (id) => axiosServiceCar.get(`${carsUrls.cars}/${id}`),
    updateById: (id, car) => axiosServiceCar.put(`${carsUrls.cars}/${id}`, car),
    deleteById: (id) => axiosServiceCar.delete(`${carsUrls.cars}/${id}`)
}