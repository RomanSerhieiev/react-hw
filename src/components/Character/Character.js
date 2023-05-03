import React from 'react';

const Character = ({character}) => {
    const {name, status, species, type, gender, origin, location, image, episodes, url, created} = character;
    return (
        <div>
            <img src={image} alt={name}/>
            <div>Name: {name}</div>
            <div>Status: {status}</div>
            <div>Species: {species}</div>
            <div>Type: {type}</div>
            <div>Gender: {gender}</div>
            <ul>Origin:
                <li>Name: {origin.name}</li>
                <li>URL: {origin.url}</li>
            </ul>
            <ul>Location:
                <li>Name: {location.name}</li>
                <li>URL: {location.url}</li>
            </ul>
            <ul>Episodes: {episodes.map(episode => (
                <li>{episode}</li>
            ))}
            </ul>
            <div>URL: {url}</div>
            <div>Created: {created}</div>
            <hr/>
            <br/>
        </div>
    );
};

export default Character;