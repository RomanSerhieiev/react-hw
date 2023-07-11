import React from 'react';

import UserDetails from './UserDetails'
import UserAddress from './UserAddress'
import Company from './Company'
import style from './User.module.css'

const User = ({user}) => {
    return (
        <div className={style.container}>
            <UserDetails
                id={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
                phone={user.phone}
                website={user.website}
            />
            <UserAddress
                street={user.address.street}
                suite={user.address.suite}
                city={user.address.city}
            />
            <Company
                name={user.company.name}
                catchPhrase={user.company.catchPhrase}
                bs={user.company.bs}
            />
        </div>
    );
};

export default User;