import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';

const SearchComponent = () => {
    const [query, setQuery] = useState('');
    const [movie, setMovie] = useState([]);

    useEffect(() => {
       return movieSearch;
    }, [])

    const findMovie = (event) => {
        setQuery(event.target.value)
    }

    const movieSearch = async (e) => {
        e.preventDefault();

        const url = `http://www.omdbapi.com/?s=${query}&apikey=c4bfbb6`;
        
        try{const res = await fetch(url);
        const data = await res.json();
        setMovie(data.Search);
        console.log(data.results)
        }catch(e){
            console.log(e)
        }
    }
    return (
        <>
            <form className="form" onSubmit={movieSearch}>
                <label htmlFor="query" className="label">Movie Name</label>
                <input type="text"
                 name="query"
                 className="input"
                 placeholder="i.e avengers" 
                 value={query}
                 onChange={findMovie}
                 />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movie.map(val => (
                 <MovieList val={val} 
                 key={val.imdbID} 
                 src={val.Poster} 
                 title={val.Title}
                 year={val.Year}
                 />
                ))} 
            </div>
        </>
    );
}


export default SearchComponent;