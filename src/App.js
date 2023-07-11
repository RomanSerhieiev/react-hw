import React, { createContext, useEffect, useState } from 'react';

import Users from './PropertyDrill/Users'
import UsersComponent from './StateLifting/UsersComponent'
import Child1 from './SubChildPropertyDrill/Child1'
import Child2 from './SubChildPropertyDrill/Child2'
import Child3 from './SubChildContext/Child3'
import Child4 from './SubChildContext/Child4'

export const TextContext = createContext();

const App = () => {
    const [users, setUsers] = useState([]);
    const [choosenUser, setChoosenUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [data1, setData1] = useState('');
    const [data2, setData2] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => setUsers(users));
    }, []);

    useEffect(() => {
        if (choosenUser) {
            fetch(`https://jsonplaceholder.typicode.com/users/${choosenUser}/posts`)
                .then((res) => res.json())
                .then((posts) => setPosts(posts));
        }
    }, [choosenUser]);

    const showPosts = (id) => {
        setChoosenUser(id);
    }

    const text1 = (value) => {
        setData1(value)
    }

    const text2 = (value) => {
        setData2(value)
    }

    const contextValue = {data2, text2}

    return (
        <div>
            <h1>Homework 3</h1>

            <h2>Property Drill</h2>
            <Users users={users} />

            <h2>State Lifting</h2>
            {choosenUser && (
                <div>
                    <h3>Posts by {choosenUser}</h3>
                    <button onClick={() => showPosts(null)}>Hide posts</button>
                    {posts.map((post) => (
                        <div key={post.id}>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </div>
            )}
            <UsersComponent users={users} showPosts={showPosts} />

            <h2>SubChild with property drill</h2>
            <Child1 data={data1} />
            <Child2 text={text1} />

            <h2>SubChild with context</h2>
            <TextContext.Provider value={contextValue}>
                <Child3 />
                <Child4 />
            </TextContext.Provider>
        </div>
    );
}

export default App;