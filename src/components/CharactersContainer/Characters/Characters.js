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
    const pageParam = query.get('page');

    useEffect(() => {
        const page = !isNaN(parseInt(pageParam)) ? pageParam : '1';
        dispatch(charactersActions.getCharacters({page}));
        setQuery(prev => ({...prev, page}));
    }, [dispatch, setQuery, pageParam]);

    return (
        <div className={css.Characters}>
            <h2>Characters from {characters[0]?.id} to {characters[characters.length - 1]?.id}</h2>
            {characters.map(character => <Character key={character.id} character={character} />)}
        </div>
    );
};

export {
    Characters
};