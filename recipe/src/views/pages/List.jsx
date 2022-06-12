import Card from "../components/Card";
import { useState, useEffect } from "react";
import { Categories } from "../../data/getData";

function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Categories().then((data) => {
      setData(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="list">
      <header className="list__header">
        <h1>sample header</h1>
      </header>
      {data && data.length ? (
        data.map((item) => (
          <Card
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
  );
}

export default List;
