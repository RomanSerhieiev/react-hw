import { useNavigate } from 'react-router-dom';

import css from './Episode.module.css';

const Episode = ({episode}) => {
    const {id, name, characters, air_date, episode: chapter} = episode;
    const navigate = useNavigate();

    return (
        <div className={css.Episode}>
            <div>
                <h3 onClick={() => navigate('/episode', {state: {ids: characters}})}>{id}. {name}</h3>
                <div className={css.Status}>{air_date} - {chapter}</div>
            </div>
            <div>
                <div className={css.Second}>Character in:</div>
                <div className={css.Link} onClick={() => navigate('/character', {state: {ids: characters}})}>character.name</div>
            </div>
        </div>
    );
};

export {
    Episode
};