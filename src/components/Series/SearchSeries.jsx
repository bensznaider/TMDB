import axios from "axios";
import useInput from "../../hooks/useInput.js";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setResults } from "../../state/results.js";

const SearchSeries = () => {
  const nombre = useInput();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
       axios
      .post("http://localhost:5000/series/search", {
        nombre:nombre.value
      })
      .then((respuesta) => {
        let arregloResultados=[]
        for (let i=0;i<respuesta.data.results.length;i++) {
          arregloResultados.push(respuesta.data.results[i])
        }
        dispatch(setResults(arregloResultados));
        navigate("/results/series")
      })
      .catch(
        (error) =>
          alert(`Al realizar la búsqueda ocurrió el siguiente error: ${error}`)
      ); 
  };
  return (
    <div>
      <h1>BUSCAR SERIES</h1>
      <form onSubmit={handleSearch}>
        Título<br></br>
        <input
          type="text"
          value={nombre.value}
          onChange={nombre.onChange}
          placeholder="Título de la serie"
        />
        <br></br> 
        <button type="submit" className="login-button">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchSeries;
