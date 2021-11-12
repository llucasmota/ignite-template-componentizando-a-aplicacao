import { api } from '../services/api';
import '../styles/content.scss'
import { MovieProps } from '../App'
import { MovieCard } from '../components/MovieCard';
import React from 'react';

interface PropsMovies {
  movies: MovieProps[];
  titleGenre: string;

}

export function Content({ movies, titleGenre }: PropsMovies) {

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {titleGenre}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>)
}