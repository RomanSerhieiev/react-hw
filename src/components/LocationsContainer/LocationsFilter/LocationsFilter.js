import css from './LocationsFilter.module.css';

const LocationsFilter = () => {
    return (
        <form className={css.LocationsFilter}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Type" />
            <input type="text" placeholder="Dimension" />
        </form>
    );
};

export {
    LocationsFilter
};