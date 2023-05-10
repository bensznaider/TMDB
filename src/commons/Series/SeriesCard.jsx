import { useSelector } from "react-redux";
import FavoriteSeriesButton from "./FavoriteSeriesButton";

const SeriesCard = () => {
  const selection = useSelector((state) => state.selection);
  function formatoFecha(fecha) {
    if (fecha === null) {
      return "-";
    } else {
      let fechaOriginal = fecha.split("-");
      let nuevaFecha = [];
      nuevaFecha.push(fechaOriginal[2]);
      nuevaFecha.push(fechaOriginal[1]);
      nuevaFecha.push(fechaOriginal[0]);
      return nuevaFecha.join("/");
    }
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
        <span id="movie-series-title">{selection.data.name.toUpperCase()}</span>
        <img
          src={`https://image.tmdb.org/t/p/w185/${selection.data.poster_path}`}
          alt={`Poster de ${selection.data.name}`}
        ></img>
      </span>
      <div style={{ margin: "15px" }}>
        <div style={{ color: "grey" }}>Título original:</div>
        <div>"{selection.data.original_name}"</div>
        <div style={{ color: "grey" }}>Fecha de estreno:</div>
        <div>{formatoFecha(selection.data.first_air_date)}</div>
        <div style={{ color: "grey" }}>Última transmisión:</div>
        <div>{formatoFecha(selection.data.last_air_date)}</div>
        <div style={{ color: "grey" }}>Género/s:</div>
        <div>{generos()}</div>
        <div style={{ color: "grey" }}>Descripción:</div>
        <div>{selection.data.overview}</div>
        <div style={{ color: "grey" }}>Cantidad de episodios:</div>
        <div>{selection.data.number_of_episodes}</div>
        <FavoriteSeriesButton></FavoriteSeriesButton>
      </div>
    </div>
  );
};

export default SeriesCard;
