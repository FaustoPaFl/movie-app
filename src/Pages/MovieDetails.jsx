import styles from './MovieDetails.module.css';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { get } from '../utils/httpClient';
import { useState } from 'react';
import { Spinner } from '../Components/Spinner';
import { getMovieImg } from '../utils/getMoviePoster';

export function MovieDetails() {
	const { movieId } = useParams();
  const [isLoading, setIsLoading]= useState(true);
	const [movie, setMovie] = useState(null);

	useEffect(() => {
    setIsLoading(true);
		get('/movie/' + movieId).then(data => {
      setMovie(data);
      setIsLoading(false);
			
		})
	},[movieId])

	if (isLoading){
    return <div><Spinner /></div>
  }

  const imageUrl = getMovieImg(movie.poster_path, 500)
  //const imageUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={imageUrl.title} />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{' '}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
