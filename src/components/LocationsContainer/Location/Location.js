import { useNavigate } from 'react-router-dom';

import css from './Location.module.css';

const Location = ({location}) => {
    const {id, name, residents, type, dimension} = location;
    const navigate = useNavigate();

    return (
        <div className={css.Location}>
            <div>
                <h3 onClick={() => navigate('/location', {state: {ids: residents}})}>{id}. {name}</h3>
                <div className={css.Status}>{type} - {dimension}</div>
            </div>
            <div>
                <div className={css.Second}>Famous resident:</div>
                <div className={css.Link} onClick={() => navigate('/character', {state: {ids: residents}})}>character.name</div>
            </div>
        </div>
    );
};

export {
    Location
};