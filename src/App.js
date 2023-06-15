import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesRequest() {
    setIsLoading(true);
    setError(null); //clear previous errors

    try {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      const updatedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingCrawl: movieData.opening_crawl,
        };
      });
      setMovies(updatedMovies);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  };

  if (error) {
    content = <p>{error}</p>;
  };

  if (isLoading) {
    content = <p>Loading...</p>;
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesRequest}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
