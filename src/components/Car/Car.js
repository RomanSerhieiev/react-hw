import React from "react";
import {carService} from "../../services/car.services";

export const Car = ({car, setCarForUpdate, setAllCars }) => {
    const {id, brand, price, year} = car;

    const deleteCar = async (id) => {
        await carService.deleteById(id);
        setAllCars(prev => !prev);
    };

    return (
        <div>
            <h3>id: {id}</h3>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={() => deleteCar(id)}>Delete</button>
        </div>
    );
};