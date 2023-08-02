import React, {useEffect, useState} from 'react';

import {GenreBadge} from "./GenreBadge/GenreBadge";
import {MovieInfo} from "./MovieInfo/MovieInfo";
import {PosterPreview} from "./PosterPreview/PosterPreview";
import {StarsRating} from "./StarsRating/StarsRating";

const MoviesListCard = () => {
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODkxM2QzNjU5MTQ0MTc1YzdlZTBiNTU3YmUwYzA1MCIsInN1YiI6IjY0YzI1NDcwZWRlMWIwMDExZjdlMTJhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2e00kleaQeXhffCqdpBIznTGQSOmG4AuCQijR77_g0w'
        }
    };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?page=1', options)
            .then(response => response.json())
            .then(response => setMovies(response.results))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list', options)
            .then(response => response.json())
            .then(response => {
                const genreNames = {};

                response.genres.forEach(genre => {
                    genreNames[genre.id] = genre.name;
                });

                setGenres(genreNames);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <GenreBadge/>
            <MovieInfo/>
            <PosterPreview/>
            <StarsRating/>

            {movies.map(movie => (
                <div key={movie.id}>
                    <hr/>
                    <h3>{movie.title}</h3>
                    <img
                        src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                        alt={movie.title}
                    />
                    <p>{movie.overview}</p>
                    <div>Genres: {movie.genre_ids.map(id => genres[id]).join(", ")}</div>
                    <div>Release Date: {movie.release_date}</div>
                    <div>Popularity: {movie.popularity}</div>
                    <div>Vote average: {movie.vote_average}</div>
                    <div>Vote count: {movie.vote_count}</div>
                </div>
            ))}
        </div>
    );
};

export {
    MoviesListCard
};