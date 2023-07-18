import React, {useState} from 'react';

import {useAxios} from "../../hooks/useAxios";
import {commentsService} from "../../services/comments.service";
import {Comment} from "./Comment";

export const Comments = () => {
    const [allUsers, setAllUsers] = useState(null);
    const [userForUpdate, setUserForUpdate] = useState(null);
    const [users] = useAxios(commentsService.getAllUsers(), allUsers);

    return (
        <div>
            <hr/>
            <h2>Users</h2>
            {users.map(user => <Comment key={user.id} user={user} setUserForUpdate={setUserForUpdate} setAllUsers={setAllUsers} />)}
        </div>
    );
};