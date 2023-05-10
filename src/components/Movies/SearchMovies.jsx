import axios from "axios";
import useInput from "../../hooks/useInput.js";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setResults } from "../../state/results.js";

const SearchMovies = () => {
  const nombre = useInput();
/*   const genero = useInput();
  const actor = useInput();
  const director = useInput();
  const estreno = useInput(); */
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
       axios
      .post("http://localhost:5000/movies/search", {
        nombre:nombre.value
      })
      .then((respuesta) => {
        let arregloResultados=[]
        for (let i=0;i<respuesta.data.results.length;i++) {
          arregloResultados.push(respuesta.data.results[i])
        }
        dispatch(setResults(arregloResultados));
        navigate("/results/movies")
      })
      .catch(
        (error) =>
          alert(`Al realizar la búsqueda ocurrió el siguiente error: ${error}`)
      ); 
  };
  return (
    <div>
      <h1>BUSCAR PELÍCULAS</h1>
      <form onSubmit={handleSearch}>
        Nombre<br></br>
        <input
          type="text"
          value={nombre.value}
          onChange={nombre.onChange}
          placeholder="Nombre de la película"
        />
       {/*  <br></br>
        <br></br>Género<br></br>
        <input
          type="text"
          value={genero.value}
          onChange={genero.onChange}
          placeholder="Ejemplo: comedia, acción..."
        />
        <br></br>
        <br></br>Año de estreno<br></br>
        <input
          type="text"
          value={estreno.value}
          onChange={estreno.onChange}
          placeholder="Año completo, ej.: 1987, 2002..."
        />
        <br></br>
        <br></br>Actor/actriz<br></br>
        <input
          type="text"
          value={actor.value}
          onChange={actor.onChange}
          placeholder="Apellido del actor o actriz"
        />
        <br></br>
        <br></br>Director/a<br></br>
        <input
          type="text"
          value={director.value}
          onChange={director.onChange}
          placeholder="Apellido del director/a"
        />*/}
        <br></br> 
        <button type="submit" className="login-button">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchMovies;
