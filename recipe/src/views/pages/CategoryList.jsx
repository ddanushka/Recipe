import Card from "../components/Card";
import { useState, useEffect } from "react";
import { Categories } from "../../data/getData";

function CategoryList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Categories().then((data) => {
      setData(data.categories);
      console.log(data);
    });
  }, []);

  return (
    <div className="category-list">
      <header className="list__header">
        <h1>select category</h1>
      </header>
      <div className="list__container">
        {data && data.length ? (
          data.map((item) => (
            <Card
              link={`/category/${item.strCategory}`}
              key={item.idCategory}
              id={item.idCategory}
              imageUrl={item.strCategoryThumb}
              title={item.strCategory}
            />
          ))
        ) : (
          <span>Loading</span>
        )}
      </div>
    </div>
  );
}

export default CategoryList;
