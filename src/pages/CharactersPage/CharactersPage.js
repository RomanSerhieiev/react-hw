import css from './CharactersPage.module.css';
import { Characters, CharactersFilter, CharactersPagination } from '../../components/CharactersContainer';

const CharactersPage = () => {
    return (
        <div className={css.CharactersPage}>
            <CharactersFilter />
            <div className={css.CharactersPagination}>
                <Characters />
                <CharactersPagination />
            </div>
        </div>
    );
};

export {
    CharactersPage
};