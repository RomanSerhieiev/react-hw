import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import css from './LocationsPagination.module.css';

const LocationsPagination = () => {
    const {pages, next, prev} = useSelector(store => store.locations);
    const [query, setQuery] = useSearchParams();

    const toAnotherPage = (params) => {
        setQuery(prev => ({...prev, page: +prev.get('page') + params}));
    };

    return (
        <div className={css.LocationsPagination}>
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
    LocationsPagination
};