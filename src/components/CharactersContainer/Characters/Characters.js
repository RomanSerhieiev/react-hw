import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { charactersActions } from '../../../redux';
import { Character } from '../Character/Character';
import css from './Characters.module.css';

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(store => store.characters);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        const newPage = !isNaN(parseInt(query.get('page'))) ? query.get('page') : '1';
        dispatch(charactersActions.getCharacters(newPage));
        setQuery(prev => ({...prev, page: newPage}));
    }, [query, dispatch, setQuery]);

    return (
        <div className={css.Characters}>
            {characters.map(character => <Character key={character.id} character={character} />)}
        </div>
    );
};

export {
    Characters
};