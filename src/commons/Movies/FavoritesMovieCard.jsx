import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setSelection } from "../../state/selection";
import axios from "axios";

const FavoritesMovieCard = ({ favorito }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let seleccionEstadoProvisorio = {};
  const handleClick = () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${favorito.tmdbId}?language=es`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmRkYjg5MTg1ODZhZGIzZGZmMjQ1NjY0ZDkyOGM2ZCIsInN1YiI6IjY0NTQwNjA0ZDQ4Y2VlMDBlMTMzYjAyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qWK6AxK-Ziv3TfYChptw6lkKQnYK73HDySC7E9VS0BY",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        seleccionEstadoProvisorio = response;
        seleccionEstadoProvisorio.favorite = true;
        dispatch(setSelection(seleccionEstadoProvisorio));
        navigate("/favorites/movies/selected-favorite");
      })
      .catch(function (error) {
        alert(`Ocurrió un error: ${error}`);
      });
  };
  return (
    <div className="login-button results-card">
      <span>
        <img
          src={`https://image.tmdb.org/t/p/w92/${favorito.posterURL}`}
          alt={`Poster de ${favorito.title}`}
        ></img>
      </span>
      <div>
        <div style={{ color: "grey" }}>Nombre:</div>
        <div>"{favorito.title}"</div>
        <div style={{ color: "grey" }}>Año de estreno:</div>
        <div>{favorito.year}</div>
        <div className="sidebar-buttons" onClick={handleClick}>
          Más info +
        </div>
      </div>
    </div>
  );
};

export default FavoritesMovieCard;
