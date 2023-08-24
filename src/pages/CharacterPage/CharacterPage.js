import css from './CharacterPage.module.css';
import { CharacterInfo } from '../../components/CharactersContainer';

const CharacterPage = () => {
    return (
        <div className={css.CharacterPage}>
            <CharacterInfo />
        </div>
    );
};

export {
    CharacterPage
};