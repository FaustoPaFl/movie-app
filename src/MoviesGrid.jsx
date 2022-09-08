import movies from "./movies.json";

export function MoviesGrid() {
  return (
    <ul>
      {movies.map((movie) => (
      	<li key={movies.id}>{movie.title}</li>
      ))}
    </ul>
  );
}
