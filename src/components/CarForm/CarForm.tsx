import { FC, PropsWithChildren } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ICar } from '../../interfaces';

interface IProps extends PropsWithChildren {

}

const CarForm: FC<IProps> = () => {
    const {reset, register, handleSubmit, setValue} = useForm<ICar>();

    const save: SubmitHandler<ICar> = async () => {

    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')} />
            <input type="text" placeholder={'price'} {...register('price')} />
            <input type="text" placeholder={'year'} {...register('year')} />
            <button>save</button>
        </form>
    );
};

export {
    CarForm
};