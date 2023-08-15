import { Episodes, EpisodesFilter, EpisodesPagination } from '../../components';
import css from './EpisodesPage.module.css';

const EpisodesPage = () => {
    return (
        <div className={css.EpisodesPage}>
            <EpisodesFilter />
            <div className={css.EpisodesPagination}>
                <Episodes />
                <EpisodesPagination />
            </div>
        </div>
    );
};

export {
    EpisodesPage
};