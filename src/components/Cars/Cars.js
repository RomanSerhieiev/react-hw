import {carService} from "../../services/cars.services";
import {Car} from "./Car";
import {useAxios} from "../../hooks/useAxios";
import {CarForm} from "./CarForm";
import {useState} from "react";

export const Cars = () => {
    const [allCars, setAllCars] = useState(null);
    const [cars] = useAxios(carService.getAll(), allCars);

    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <div>
            <h2>Cars</h2>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate} />
            <br/>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setAllCars={setAllCars} />)}
        </div>
    );
};