import { Locations, LocationsFilter, LocationsPagination } from '../../components/LocationsContainer';
import css from './LocationsPage.module.css';

const LocationsPage = () => {
    return (
        <div className={css.LocationsPage}>
            <LocationsFilter />
            <div className={css.LocationsPagination}>
                <Locations />
                <LocationsPagination />
            </div>
        </div>
    );
};

export {
    LocationsPage
};