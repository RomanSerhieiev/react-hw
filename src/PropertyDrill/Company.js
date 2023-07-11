import React from 'react';

const Company = ({name, catchPhrase, bs}) => {
    return (
        <div>
            <b>Company:</b>
            <div>name: {name}</div>
            <div>catchPhrase: {catchPhrase}</div>
            <div>bs: {bs}</div>
        </div>
    );
};

export default Company;