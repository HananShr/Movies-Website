// favoites movie page
import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Fav() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your favorites </h2>
        <div className="movie-grid">
          {favorites.map((movie) => (
            //if the tap content start with what in the searchQuery then dispaly the movies cards
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No favorite movies yet</h2>
      <p>start adding movies to your favorites and they will appear here</p>
    </div>
  );
}
export default Fav;
