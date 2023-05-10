import { useSelector } from "react-redux";
import ResultsMovieCard from "../../commons/Movies/ResultsMovieCard";

const ResultsMovies = () => {
  const results = useSelector((state) => state.results);
  if (results.length > 0) {
    return (<div>RESULTADO DE LA BÚSQUEDA
      <div>
        {results.map((result) => 
          <ResultsMovieCard key={result.id} resultado={result}></ResultsMovieCard>
        )}
      </div></div>
    );
  } else {
    return <div>La búsqueda no arrojó ningún resultado.</div>;
  }
};

export default ResultsMovies;
