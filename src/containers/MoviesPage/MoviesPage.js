import React from 'react';

import {Header} from "../../components/Header/Header";
import {MoviesList} from "../../components/MoviesList/MoviesList";
import {UserInfo} from "../../components/UserInfo/UserInfo";

const MoviesPage = () => {
    return (
        <div>
            <Header/>
            <br/>
            <MoviesList/>
            <br/>
            <UserInfo/>
        </div>
    );
};

export {
    MoviesPage
};