import css from './CharactersFilter.module.css';

const CharactersFilter = () => {
    return (
        <form className={css.CharactersFilter}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Status" />
            <input type="text" placeholder="Species" />
            <input type="text" placeholder="Type" />
            <input type="text" placeholder="Gender" />
        </form>
    );
};

export {
    CharactersFilter
};