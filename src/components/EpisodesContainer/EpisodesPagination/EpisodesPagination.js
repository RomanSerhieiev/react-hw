import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import css from './EpisodesPagination.module.css';

const EpisodesPagination = () => {
    const {pages, next, prev} = useSelector(store => store.episodes);
    const [query, setQuery] = useSearchParams();

    const toAnotherPage = (params) => {
        setQuery(prev => ({...prev, page: +prev.get('page') + params}));
    };

    return (
        <div className={css.EpisodesPagination}>
            <button
                className={!prev ? css.btnDis : css.btn}
                onClick={() => toAnotherPage(-1)}
                disabled={!prev}
            >
                PREV
            </button>
            <div className={css.btnCurr}>PAGE {+query.get('page')}/{pages}</div>
            <button
                className={!next ? css.btnDis : css.btn}
                onClick={() => toAnotherPage(1)}
                disabled={!next}
            >
                NEXT
            </button>
        </div>
    );
};

export {
    EpisodesPagination
};