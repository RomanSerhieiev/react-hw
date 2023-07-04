import React from 'react';

const Simpson = ({simpson}) => {
    const {name, gender, status, countryOfBirth, age, hairColor, occupation, info, image} = simpson;
    return (
        <div>
            <img src={image} alt={name} height="200px"/>
            <h2>{name}</h2>
            <div><b>Gender</b>: {gender}</div>
            <div><b>Status</b>: {status}</div>
            <div><b>Country of birth</b>: {countryOfBirth}</div>
            <div><b>Age</b>: {age}</div>
            <div><b>Hair color</b>: {hairColor}</div>
            <div><b>Occupation</b>: {occupation}</div>
            <p>{info}</p>
            <hr/>
            <br/>
        </div>
    );
};

export default Simpson;