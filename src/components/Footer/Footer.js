import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import css from './Footer.module.css';
import { charactersActions, episodesActions, locationsActions } from '../../redux';

const Footer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {count: countCharacters} = useSelector(store => store.characters);
    const {count: countLocations} = useSelector(store => store.locations);
    const {count: countEpisodes} = useSelector(store => store.episodes);

    useEffect(() => {
        dispatch(charactersActions.getCharacters({page: '1'}));
        dispatch(episodesActions.getEpisodes({page: '1'}));
        dispatch(locationsActions.getLocations({page: '1'}));
    }, [dispatch]);

    return (
        <div className={css.Footer}>
            <div className={css.Link} onClick={() => navigate('/characters')}>CHARACTERS: {countCharacters}</div>
            <div className={css.Link} onClick={() => navigate('/locations')}>LOCATIONS: {countLocations}</div>
            <div className={css.Link} onClick={() => navigate('/episodes')}>EPISODES: {countEpisodes}</div>
        </div>
    );
};

export {
    Footer
};