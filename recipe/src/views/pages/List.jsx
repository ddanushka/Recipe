import Card from "../components/Card";
import { useState, useEffect } from "react";
import { getCategory } from "../../data/getData";
import { useParams } from "react-router-dom";

function List() {
  let params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getCategory(params.name).then((data) => {
      setData(data.meals);
      console.log(data);
    });
  }, [params.name]);

  return (
    <div className="list">
      <h1 className="header">meals in {params.name}</h1>
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

export default List;
