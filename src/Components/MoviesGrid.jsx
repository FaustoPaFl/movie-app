import { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from '../hooks/useQuery';
import { get } from '../utils/httpClient';
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';
import { Spinner } from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component'

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  
  const query = useQuery();
  const search = query.get('search');
  
  useEffect(() => {
    setisLoading(true);
    const searchUrl = search ? '/search/movie?query=' + search + '&page=' + page : '/discover/movie?page=' + page;
    get(searchUrl).then(data => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setisLoading(false);
    })
}, [search, page]);

  return (
    <InfiniteScroll
    dataLength={movies.length}
    hasMore={true}
    next={() => setPage((prevPage) => prevPage + 1)}
    loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
