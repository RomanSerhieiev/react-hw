import { useNavigate } from 'react-router-dom';

import css from './Episode.module.css';

const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;
    const navigate = useNavigate();

    return (
        <div className={css.Episode} onClick={() => navigate('/characters', {state: {ids: characters}})}>
            <div>{id}. {name} ({chapter})</div>
        </div>
    );
};

export {
    Episode
};