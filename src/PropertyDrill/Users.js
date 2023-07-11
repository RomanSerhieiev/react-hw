import React from 'react';

import User from './User'
import style from './Users.module.css'

const Users = ({users}) => {
    return (
        <div className={style.container}>
            {users.map((user, id) => <User key={id} user={user} />)}
        </div>
    );
};

export default Users;