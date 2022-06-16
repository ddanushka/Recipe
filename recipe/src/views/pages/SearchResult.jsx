import Card from "../components/Card";
import { useState, useEffect } from "react";
import { getSearchResult } from "../../data/getData";
import { useParams } from "react-router-dom";
import Status from "../components/Status";

function SearchResult() {
  let params = useParams();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState();

  useEffect(() => {
    getSearchResult(params.keyword).then((data) => {
      setData(data.meals);
    }).catch((err) => setStatus(err.message));
  }, [params.keyword]);

  return (
    <div className="list">
      <h1>Search results for "<span className="bold">{params.keyword}</span>"</h1>
      <div className="list__container">
        {data && data.length ? (
          data.map((item) => (
            <Card
              key={item.idMeal}
              link={"/details/" + item.idMeal}
              id={item.idMeal}
              imageUrl={item.strMealThumb}
              title={item.strMeal}
            />
          ))
        ) : (
          <Status data={data} error={status} />
        )}
      </div>
    </div>
  );
}

export default SearchResult;
