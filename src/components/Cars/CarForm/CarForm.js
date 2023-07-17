import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {carService} from "../../../services/car.services";
import {joiResolver} from "@hookform/resolvers/joi"
import {carValidator} from "../../../validators/car.validator";

export const CarForm = ({setAllCars, carForUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: "all", resolver: joiResolver(carValidator)});

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true});
            setValue('price', carForUpdate.price, {shouldValidate: true});
            setValue('year', carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate]);

    const create = async (car) => {
        await carService.create(car);
        setAllCars(prev => !prev);
        reset();
    };

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        setAllCars(prev => !prev);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : create)}>
            <input type="text" placeholder={'brand'} {...register('brand')} />
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price')} />
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year')} />
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid} type='submit'>{carForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};