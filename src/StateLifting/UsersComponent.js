import React from 'react';

import UserComponent from './UserComponent'

const UsersComponent = ({users, showPosts}) => {
    return (
        <div>
            {users?.map((user, id) => <UserComponent key={id} user={user} showPosts={showPosts} />)}
        </div>
    );
};

export default UsersComponent;