import Card from "../components/Card";
import { useState, useEffect } from "react";
import { getSearchResult } from "../../data/getData";

function SearchResult() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getSearchResult('Ar').then((data) => {
      setData(data.meals);
      console.log(data);
    });
  }, []);

  return (
    <div className="list">
      <header className="list__header">
        <h1>meals in beef</h1>
      </header>
      <div className="list__container">
      {data && data.length ? (
        data.map((item) => (
          <Card
            key={item.idMeal}
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
