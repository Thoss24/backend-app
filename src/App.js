import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);

  function fetchMoviesRequest() {
    fetch('https://swapi.dev/api/films/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const updatedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingCrawl: movieData.opening_crawl
        }
      })
      setMovies(updatedMovies)
    })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesRequest}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies}/>
      </section>
    </React.Fragment>
  );
}

export default App;
