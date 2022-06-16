import Card from "../components/Card";
import { useState, useEffect } from "react";
import { Categories } from "../../data/getData";
import Status from "../components/Status";

function CategoryList() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState();


  useEffect(() => {
    Categories().then((data) => {
      setData(data.categories);
    }).catch((err) => setStatus(err.message));

  }, []);

  return (
    <div className="category-list">
      <h1>Select a category</h1>
      <div className="list__container">
        {data && data.length ? (
          data.map((item) => (
            <Card
              link={"/category/" + item.strCategory}
              key={item.idCategory}
              id={item.idCategory}
              imageUrl={item.strCategoryThumb}
              title={item.strCategory}
            />
          ))
        ) : (
          <Status data={data} error={status} />
        )}
      </div>
    </div>
  );
}

export default CategoryList;
