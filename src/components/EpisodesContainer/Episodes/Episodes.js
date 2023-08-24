import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import css from './Episodes.module.css';
import { Episode } from '../Episode/Episode';
import { episodesActions } from '../../../redux';

const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes} = useSelector(store => store.episodes);
    const [query, setQuery] = useSearchParams({page: '1'});
    const pageParam = query.get('page');

    useEffect(() => {
        const page = !isNaN(parseInt(pageParam)) ? pageParam : '1';
        dispatch(episodesActions.getEpisodes({page}));
        setQuery(prev => ({...prev, page}));
    }, [dispatch, pageParam, setQuery]);

    return (
        <div className={css.Episodes}>
            <h2>Episodes from {episodes[0]?.id} to {episodes[episodes.length - 1]?.id}</h2>
            {episodes.map(episode => <Episode key={episode.id} episode={episode} />)}
        </div>
    );
};

export {
    Episodes
};