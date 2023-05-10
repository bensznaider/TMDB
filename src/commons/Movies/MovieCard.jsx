import { useSelector } from "react-redux";
import FavoriteMovieButton from "./FavoriteMovieButton";

const MovieCard = () => {
  const selection = useSelector((state) => state.selection);

  function formatoFecha() {
    let fechaOriginal = selection.data.release_date.split("-");
    let fecha = [];
    fecha.push(fechaOriginal[2]);
    fecha.push(fechaOriginal[1]);
    fecha.push(fechaOriginal[0]);
    return fecha.join("/");
  }

  function generos() {
    let generosOriginal = selection.data.genres;
    let generos = [];
    for (let i = 0; i < generosOriginal.length; i++) {
      generos.push(generosOriginal[i].name);
    }
    return generos.join(", ");
  }

  return (
    <div className="login-button results-card">
      <span>
        <span id="movie-series-title">
          {selection.data.title.toUpperCase()}
        </span>
        <img
          src={`https://image.tmdb.org/t/p/w185/${selection.data.poster_path}`}
          alt={`Poster de ${selection.data.title}`}
        ></img>
      </span>
      <div style={{ margin: "15px" }}>
        <div style={{ color: "grey" }}>Título original:</div>
        <div>"{selection.data.original_title}"</div>
        <div style={{ color: "grey" }}>Fecha de estreno:</div>
        <div>{formatoFecha()}</div>
        <div style={{ color: "grey" }}>Género/s:</div>
        <div>{generos()}</div>
        <div style={{ color: "grey" }}>Descripción:</div>
        <div>{selection.data.overview}</div>
        <div style={{ color: "grey" }}>Presupuesto:</div>
        <div>U$S{selection.data.budget}</div>
        <div style={{ color: "grey" }}>Recaudación:</div>
        <div>U$S{selection.data.revenue}</div>
        <FavoriteMovieButton></FavoriteMovieButton>
      </div>
    </div>
  );
};

export default MovieCard;
