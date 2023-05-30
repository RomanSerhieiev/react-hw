import React, {useState} from 'react';

const Post = ({post}) => {
    const {id, title, body, userId} = post;
    const [show, setShow] = useState(false);
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            {show &&
                <div>
                    <div>body: {body}</div>
                    <div>userId: {userId}</div>
                </div>
            }
            <button onClick={() => setShow(prev => !prev)}>details</button>
            <hr/>
        </div>
    );
};

export default Post;