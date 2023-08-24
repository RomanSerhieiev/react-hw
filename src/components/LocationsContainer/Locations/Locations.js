import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import css from './Locations.module.css';
import { Location } from '../Location/Location';
import { locationsActions } from '../../../redux';

const Locations = () => {
    const dispatch = useDispatch();
    const {locations} = useSelector(store => store.locations);
    const [query, setQuery] = useSearchParams({page: '1'});
    const pageParam = query.get('page');

    useEffect(() => {
        const page = !isNaN(parseInt(pageParam)) ? pageParam : '1';
        dispatch(locationsActions.getLocations({page}));
        setQuery(prev => ({...prev, page}));
    }, [dispatch, setQuery, pageParam]);

    return (
        <div className={css.Locations}>
            <h2>Locations from {locations[0]?.id} to {locations[locations.length - 1]?.id}</h2>
            {locations.map(location => <Location key={location.id} location={location} />)}
        </div>
    );
};

export {
    Locations
};