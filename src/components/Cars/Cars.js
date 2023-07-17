import {carService} from "../../services/car.services";
import {Car} from "./Car/Car";
import {useAxios} from "../../hooks/useAxios";
import {CarForm} from "./CarForm/CarForm";
import {useState} from "react";

const Cars = () => {
    const [allCars, setAllCars] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [cars] = useAxios(carService.getAll(), allCars);

    return (
        <div>
            <h2>Cars</h2>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate} />
            <br/>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setAllCars={setAllCars} />)}
        </div>
    );
};

export default Cars