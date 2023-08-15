import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import css from './CharactersPagination.module.css';

const CharactersPagination = () => {
    const {prevPage, nextPage} = useSelector(state => state.characters);
    const [query, setQuery] = useSearchParams();

    const toAnotherPage = (params) => {
        setQuery(prev => ({...prev, page: +prev.get('page') + params}));
    };

    return (
        <div className={css.CharactersPagination}>
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
    CharactersPagination
};