import { useSelector } from "react-redux";
import FavoritesSeriesCard from "../../commons/Series/FavoritesSeriesCard";

const FavoritesSeries = () => {
  const localFavorites = useSelector((state) => state.localFavorites);
  if (localFavorites.length > 0) {
    return (
      <div>
        FAVORITOS
        <div>
          {localFavorites.map((favorito) => (
            <FavoritesSeriesCard
              key={favorito.id}
              favorito={favorito}
            ></FavoritesSeriesCard>
          ))}
        </div>
      </div>
    );
  } else {
    return <div>No hay favoritos por mostrar.</div>
  }
};

export default FavoritesSeries;
