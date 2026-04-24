import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Fav from "./pages/Fav";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";
import { Helmet } from "react-helmet";

function App() {
  const movienumber = 1;
  return (
    <>
      <Helmet>
        <title> Movie App</title>
        <meta name="description" content="Search and discover movies بسهولة" />
        <link rel="icon" href="/movie-icon.png" />
      </Helmet>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Fav" element={<Fav />} />
          </Routes>
        </main>
        {/* <Home /> */}
        {/* // display movies from movie card directly 
      <MovieCard movie={{ title: "example1", release_date: "2025" }} />
      <MovieCard movie={{ title: "example2", release_date: "2019" }} />
      <MovieCard movie={{ title: "example3", release_date: "2026" }} /> */}
        {/* condition statement : if else  
      {movienumber === 1 ? (
        <MovieCard movie={{ title: "example1", release_date: "2025" }} />
      ) : (
        <MovieCard movie={{ title: "example2", release_date: "2019" }} />
      )} */}
      </MovieProvider>
    </>
  );
}

export default App;
