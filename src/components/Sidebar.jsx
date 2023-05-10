import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLocalFavorites } from "../state/favorites";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Sidebar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLinkMovieFavorites = () => {
    axios
      .get(`http://localhost:5000/movies/${user.id}/favorites`)
      .then((respuesta) => {
        let favoritos = respuesta.data;
        dispatch(setLocalFavorites(favoritos));
        navigate("/favorites/movies");
      })
      .catch((error) => console.log(error));
  };

  const handleLinkSeriesFavorites = () => {
    axios
      .get(`http://localhost:5000/series/${user.id}/favorites`)
      .then((respuesta) => {
        let favoritos = respuesta.data;
        dispatch(setLocalFavorites(favoritos));
        navigate("/favorites/series");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="sidebar">
      <Link to="/search-movies">
        <button className="sidebar-buttons">Buscar películas</button>
      </Link>
      <Link to="/search-series">
        <button className="sidebar-buttons">Buscar series</button>
      </Link>
      {user.id !== null ? (
        <button className="sidebar-buttons" onClick={handleLinkMovieFavorites}>
          Películas favoritas
        </button>
      ) : (
        <span></span>
      )}
      {user.id !== null ? (
        <button className="sidebar-buttons" onClick={handleLinkSeriesFavorites}>
          Series favoritas
        </button>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Sidebar;
