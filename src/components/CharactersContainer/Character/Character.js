import { useNavigate } from 'react-router-dom';

import css from './Character.module.css';

const Character = ({character}) => {
    const {id, name, episode} = character;
    const navigate = useNavigate();

    return (
        <div className={css.Character} onClick={() => navigate('/episodes', {state: {ids: episode}})}>
            <div>{id}. {name}</div>
        </div>
    );
};

export {
    Character
};