import React from 'react';
import {jpService} from "../../services/jp.service";

export const User = ({user, setUserForUpdate, setAllUsers}) => {
    const {id, name, username, email, address, phone, website, company} = user;

    const deleteUser = async (id) => {
        await jpService.updateUserById(id);
        setAllUsers(prev => !prev);
    };

    return (
        <div>
            <h3>ID: {id}</h3>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>Address:
                <ul>
                    <div>Street: {address.street}</div>
                    <div>Suite: {address.suite}</div>
                    <div>City: {address.city}</div>
                    <div>Zipcode: {address.zipcode}</div>
                    <div>Geo:
                        <ul>
                            <div>Lat: {address.geo.lat}</div>
                            <div>Lng: {address.geo.lng}</div>
                        </ul>
                    </div>
                </ul>
            </div>
            <div>Phone: {phone}</div>
            <div>Website: {website}</div>
            <div>Company:
                <ul>
                    <div>Name: {company.name}</div>
                    <div>Catch phrase: {company.catchPhrase}</div>
                    <div>BS: {company.bs}</div>
                </ul>
            </div>
            <button onClick={() => setUserForUpdate(user)}>Update</button>
            <button onClick={() => deleteUser(id)}>Delete</button>
        </div>
    );
};