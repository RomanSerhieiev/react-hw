import { useEffect, useState } from 'react';

const App = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => setUsers(users));
    }, []);

    return (
        <>
            <h1>Homework 3</h1>

        </>
    );
}

export default App;
