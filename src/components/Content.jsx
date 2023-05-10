import { Routes, Route } from "react-router";
import SignUp from "./SignUp";
import Login from "./Login";
import SearchMovies from "./Movies/SearchMovies";
import SearchSeries from "./Series/SearchSeries"
import ResultsMovies from "./Movies/ResultsMovies"
import ResultsSeries from "./Series/ResultsSeries"
import MovieCard from "../commons/Movies/MovieCard";
import SeriesCard from "../commons/Series/SeriesCard"
import FavoritesMovies from "./Movies/FavoritesMovies";
import FavoritesSeries from "./Series/FavoritesSeries";

const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>BIENVENIDOS A TMDB</h1>
              <p>
                TMDB es una enorme base de datos de series y películas para
                consulta gratuita. Podés buscar libremente sin tener un usuario
                y, si quisieras acceder a funciones adicionales como guardar
                favoritos, te podés crear una cuenta solo con tu correo
                electrónico. Bienvenido!
              </p>
            </div>
          }
        ></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/search-movies" element={<SearchMovies />}></Route>
        <Route path="/search-series" element={<SearchSeries />}></Route>
        <Route path="/results/movies" element={<ResultsMovies />}></Route>
        <Route path="/results/series" element={<ResultsSeries />}></Route>
        <Route path="/results/movies/selected-movie" element={<MovieCard />}></Route>
        <Route path="/results/series/selected-series" element={<SeriesCard />}></Route>
        <Route path="/favorites/movies" element={<FavoritesMovies />}></Route>
        <Route path="/favorites/series" element={<FavoritesSeries />}></Route>
        <Route path="/favorites/movies/selected-favorite" element={<MovieCard />}></Route>
        <Route path="/favorites/series/selected-favorite" element={<SeriesCard />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
