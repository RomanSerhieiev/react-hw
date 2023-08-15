import { useNavigate } from 'react-router-dom';

import css from './Episode.module.css';

const Episode = ({episode}) => {
    const {id, name, characters} = episode;
    const navigate = useNavigate();

    return (
        <div className={css.Episode} onClick={() => navigate('/characters', {state: {ids: characters}})}>
            <div>{id}. {name}</div>
        </div>
    );
};

export {
    Episode
};