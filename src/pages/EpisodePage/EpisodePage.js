import css from './EpisodePage.module.css';
import { EpisodeInfo } from '../../components';

const EpisodePage = () => {
    return (
        <div className={css.EpisodePage}>
            <EpisodeInfo />
        </div>
    );
};

export {
    EpisodePage
};