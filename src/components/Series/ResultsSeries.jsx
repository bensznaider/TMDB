import { useSelector } from "react-redux";
import ResultsSeriesCard from "../../commons/Series/ResultsSeriesCard";

const ResultsSeries = () => {
  const results = useSelector((state) => state.results);
  if (results.length > 0) {
    return (<div>RESULTADO DE LA BÚSQUEDA
      <div>
        {results.map((result) => 
          <ResultsSeriesCard key={result.id} resultado={result}></ResultsSeriesCard>
        )}
      </div></div>
    );
  } else {
    return <div>La búsqueda no arrojó ningún resultado.</div>;
  }
};

export default ResultsSeries;
