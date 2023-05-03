import React from 'react';

const Simpson = ({simpson}) => {
    const {name, gender, status, countryOfBirth, age, hairColor, occupation, info, image} = simpson;
    return (
        <div>
            <img src={image} alt={name}/>
            <div>Name: {name}</div>
            <div>Gender: {gender}</div>
            <div>Status: {status}</div>
            <div>Country of birth: {countryOfBirth}</div>
            <div>Age: {age}</div>
            <div>Hair color: {hairColor}</div>
            <div>Occupation: {occupation}</div>
            <p>{info}</p>
            <hr/>
            <br/>
        </div>
    );
};

export default Simpson;