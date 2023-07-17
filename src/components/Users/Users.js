import React, {useState} from 'react';
import {useAxios} from "../../hooks/useAxios";
import {jpService} from "../../services/jp.service";
import User from "./User/User";

const Users = () => {
    const [allUsers, setAllUsers] = useState(null);
    const [userForUpdate, setUserForUpdate] = useState(null);
    const [users] = useAxios(jpService.getAllUsers(), allUsers);

    return (
        <div>
            <hr/>
            <h2>Users</h2>
            {users.map(user => <User key={user.id} user={user} setUserForUpdate={setUserForUpdate} setAllUsers={setAllUsers} />)}
        </div>
    );
};

export default Users