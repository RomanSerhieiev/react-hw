import css from './CharactersFilter.module.css';

const CharactersFilter = () => {
    return (
        <form className={css.CharactersFilter}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Episode" />
        </form>
    );
};

export {
    CharactersFilter
};