import { useNavigate } from 'react-router-dom';

import css from './Character.module.css';

const Character = ({character}) => {
    const {id, name, episode, image, status, species, origin: {name: originName}} = character;
    const navigate = useNavigate();

    return (
        <div className={css.Character}>
            <img src={image} alt={name} width="200px" height="200px" />
            <div className={css.Info}>
                <div>
                    <h3 onClick={() => navigate('/character', {state: {ids: episode}})}>{id}. {name}</h3>
                    <div className={css.Status}><span className={css[status]}></span>{status} - {species}</div>
                </div>
                <div>
                    <div className={css.Second}>Last known location:</div>
                    <div className={css.Link} onClick={() => navigate('/location', {state: {ids: episode}})}>{originName}</div>
                </div>
                <div>
                    <div className={css.Second}>First seen in:</div>
                    <div className={css.Link} onClick={() => navigate('/episode', {state: {ids: episode}})}>{}</div>
                </div>
            </div>
        </div>
    );
};

export {
    Character
};