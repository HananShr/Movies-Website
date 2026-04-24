// home page :
import "../css/Home.css";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";

import { getPopularMovies, searchMovies } from "../services/api";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  // when the state change , the entire components re-rendered
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("failed to load movies .... ");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);
  // const movies = [
  //   { id: 1, title: "Fatma", release_date: "2026" },
  //   { id: 2, title: "Termined", release_date: "2026" },
  //   { id: 3, title: "achour", release_date: "2026" },
  //   { id: 4, title: "barani", release_date: "2026" },
  // ];
  const handlSearch = async (e) => {
    e.preventDefault(); // to stop refresh the page auto after seaching - this make the search bar has the same as u tap
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("failed to search movies .... ");
    } finally {
      setLoading(false);
    }

    // alert(searchQuery);
    // setSearchQuery(""); // to define the new value after searching
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={handlSearch}>
        <input
          type="text"
          placeholder="search for movies ... "
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          {" "}
          Search{" "}
        </button>
      </form>
      {error && <div className="error-message"> {error} </div>}
      {loading ? (
        <div className="loading"> Loading ... </div>
      ) : (
        <div className="movie-grid">
          {movies.map(
            (movie) =>
              //if the tap content start with what in the searchQuery then dispaly the movies cards
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />
              ),
          )}
        </div>
      )}
    </div>
  );
}
export default Home;
