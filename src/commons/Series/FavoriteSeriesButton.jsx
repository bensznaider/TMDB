import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setSelection } from "../../state/selection";

const FavoriteMovieButton = () => {
  const selection = useSelector((state) => state.selection);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let seleccionEstadoProvisorio = Object.assign({}, selection);

  const handleAddFavorite = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/series/addfavorite", {
        title: selection.data.name,
        type: "series",
        tmdbId: selection.data.id,
        userId: user.id,
        posterURL: `https://image.tmdb.org/t/p/w92/${selection.data.poster_path}`,
      })
      .then(() => {
        seleccionEstadoProvisorio.favorite = true;
        alert("Favorito registrado correctamente.");
        dispatch(setSelection(seleccionEstadoProvisorio));
      })
      .catch(
        (error) =>
          `Al intentar registrar el favorito ocurrió el siguiente error: ${error}`
      );
  };

  const handleRemoveFavorite = (event) => {
    const headers = {
      title: selection.data.name,
      type: "series",
      tmdbId: selection.data.id,
      userId: user.id,
    };
    event.preventDefault();
    axios
      .delete("http://localhost:5000/series/removefavorite", {
        headers,
      })
      .then(() => {
        seleccionEstadoProvisorio.favorite = false;
        dispatch(setSelection(seleccionEstadoProvisorio));
        alert("Favorito eliminado correctamente.");
      })
      .catch(
        (error) =>
          `Al intentar eliminar el favorito ocurrió el siguiente error: ${error}`
      );
  };

  if (user.id !== null && selection.favorite === false) {
    return (
      <div className="sidebar-buttons" onClick={handleAddFavorite}>
        Añadir a favoritos
      </div>
    );
  } else if (user.id !== null && selection.favorite === true) {
    return (
      <div className="sidebar-buttons" onClick={handleRemoveFavorite}>
        Quitar de favoritos
      </div>
    );
  } else if (user.id === null) {
    return <span></span>;
  }
};

export default FavoriteMovieButton;
