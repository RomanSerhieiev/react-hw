import React, {useEffect, useState} from 'react';
import Post from "./Post";
import axios from "axios";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts').then(value => value.data).then(value => setPosts(value));
    }, [])
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;