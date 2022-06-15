import Card from "../components/Card";
import Status from "../components/Status";
import { useState, useEffect } from "react";
import { getCategory } from "../../data/getData";
import { useParams } from "react-router-dom";

function List() {
  let params = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    getCategory(params.name)
      .then((data) => {
        setData(data.meals);
        console.log(data);
      })
      .catch((err) => setError(err.message));
  }, [params.name]);

  return (
    <div className="list">
      <h1>meals in {params.name}</h1>
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
          <Status data={data} error={error} />
        )}
      </div>
    </div>
  );
}

export default List;
