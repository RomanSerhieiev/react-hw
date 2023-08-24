import css from './LocationPage.module.css';
import { LocationInfo } from '../../components/LocationsContainer';

const LocationPage = () => {
    return (
        <div className={css.LocationPage}>
            <LocationInfo />
        </div>
    );
};

export {
    LocationPage
};