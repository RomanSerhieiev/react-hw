import React from 'react';

const UserComponent = ({user, showPosts}) => {
    return (
        <div>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>username: {user.username}</div>
            <button onClick={() => showPosts(user.id)}>Show posts</button>
        </div>
    );
};

export default UserComponent;