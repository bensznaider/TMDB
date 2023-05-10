import { useSelector } from "react-redux";
import FavoritesMovieCard from "../../commons/Movies/FavoritesMovieCard";

const Favorites = () => {
  const localFavorites = useSelector((state) => state.localFavorites);
  if (localFavorites.length > 0) {
    return (
      <div>
        FAVORITOS
        <div>
          {localFavorites.map((favorito) => (
            <FavoritesMovieCard
              key={favorito.id}
              favorito={favorito}
            ></FavoritesMovieCard>
          ))}
        </div>
      </div>
    );
  } else {
    return <div>No hay favoritos por mostrar.</div>
  }
};

export default Favorites;
