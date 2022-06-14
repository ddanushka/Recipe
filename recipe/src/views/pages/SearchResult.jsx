import Card from "../components/Card";
import { useState, useEffect } from "react";
import { getSearchResult } from "../../data/getData";
import { useParams } from "react-router-dom";

function SearchResult() {
  let params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getSearchResult(params.keyword).then((data) => {
      setData(data.meals);
      console.log(data);
    });
  }, [params.keyword]);

  return (
    <div className="list">
      <h1 className="header">Search results for "{params.keyword}"</h1>
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
          <span>Loading</span>
        )}
      </div>
    </div>
  );
}

export default SearchResult;
