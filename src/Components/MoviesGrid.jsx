import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { get } from '../utils/httpClient';
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';
import { Spinner } from './Spinner';

function useQuery(){
  return new URLSearchParams(useLocation().search); 
}

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  
  const query = useQuery();
  const search = query.get('seach');
  
  useEffect(() => {
    setisLoading(true);
    const searchUrl = search ? '/search/movie?query=' + search : '/discover/movie'
    get(searchUrl).then(data => {
      setMovies(data.results);
      setisLoading(false);
    })
}, [search]);

  if (isLoading){
    return <Spinner />;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
