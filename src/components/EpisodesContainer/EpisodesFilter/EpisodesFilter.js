import css from './EpisodesFilter.module.css';

const EpisodesFilter = () => {
    return (
        <form className={css.EpisodesFilter}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Episode" />
        </form>
    );
};

export {
    EpisodesFilter
};