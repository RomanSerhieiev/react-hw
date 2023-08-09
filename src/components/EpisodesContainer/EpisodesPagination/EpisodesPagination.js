import { useSelector } from 'react-redux';

import css from './EpisodesPagination.module.css';
import { useSearchParams } from 'react-router-dom';

const EpisodesPagination = () => {
    const {prevPage, nextPage} = useSelector(state => state.episodes);
    const [query, setQuery] = useSearchParams();

    const toAnotherPage = (params) => {
        setQuery(prev => ({...prev, page: +prev.get('page') + params}));
    };

    return (
        <div className={css.EpisodesPagination}>
            <button
                className={!prevPage ? css.btnDis : css.btn}
                onClick={() => toAnotherPage(-1)}
                disabled={!prevPage}
            >
                PREV
            </button>
            <div className={css.btnCurr}>PAGE {+query.get('page')}</div>
            <button
                className={!nextPage ? css.btnDis : css.btn}
                onClick={() => toAnotherPage(1)}
                disabled={!nextPage}
            >
                NEXT
            </button>
        </div>
    );
};

export {
    EpisodesPagination
};