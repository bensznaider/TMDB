import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelection } from "../../state/selection";

const ResultsSeriesCard = ({ resultado }) => {
  const user = useSelector((state) => state.user);
  let seleccionEstadoProvisorio = {};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/tv/${resultado.id}?language=es`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmRkYjg5MTg1ODZhZGIzZGZmMjQ1NjY0ZDkyOGM2ZCIsInN1YiI6IjY0NTQwNjA0ZDQ4Y2VlMDBlMTMzYjAyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qWK6AxK-Ziv3TfYChptw6lkKQnYK73HDySC7E9VS0BY'
      }
    };
    
    axios
      .request(options)
      .then(function (response) {
        seleccionEstadoProvisorio = response;
      })
      .then(() => {
        if (user.id) {
          axios
            .get(`http://localhost:5000/series/${user.id}/favorites`)
            .then((respuesta) => {
              if (
                respuesta.data.some((movie) => movie.tmdbId === resultado.id)
              ) {
                seleccionEstadoProvisorio.favorite = true;
              } else {
                seleccionEstadoProvisorio.favorite = false;
              }
              dispatch(setSelection(seleccionEstadoProvisorio));
              navigate("/results/series/selected-series");
            })
            .catch((error) => {
              if (error.response.status === 404) {
                dispatch(setSelection(seleccionEstadoProvisorio));
                navigate("/results/series/selected-series");
              } else {
                alert(`Ocurrió un error: ${error}`);
              }
            });
        } else {
          dispatch(setSelection(seleccionEstadoProvisorio));
          navigate("/results/series/selected-series");
        }
      })
      .catch(function (error) {
        alert(`Ocurrió un error: ${error}`);
      });
  };

  return (
    <div className="login-button results-card">
      <span>
        <img
          src={`https://image.tmdb.org/t/p/w92/${resultado.poster_path}`}
          alt={`Poster de ${resultado.name}`}
        ></img>
      </span>
      <div>
        <div style={{ color: "grey" }}>Nombre:</div>
        <div>"{resultado.name}"</div>
        <div style={{ color: "grey" }}>Año de estreno:</div>
        <div>{resultado.first_air_date.substring(0, 4)}</div>
        <div className="sidebar-buttons" onClick={handleClick}>
          Más info +
        </div>
      </div>
    </div>
  );
};

export default ResultsSeriesCard;
