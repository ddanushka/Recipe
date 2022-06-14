import { useState, useEffect } from "react";
import { getRecipe } from "../../data/getData";
import { useParams, useNavigate } from "react-router-dom";

function Details() {
  let params = useParams();
  let navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    getRecipe(params.id).then((data) => {
      setData(data.meals[0]);
      console.log(params);
    });
  }, [params]);

  return (
    <div className="recipe-details">
      {data ? (
        <>
          <button onClick={() => navigate(-1)}>Back</button>
          <h1 className="header">{data.strMeal}</h1>
          <a href={data.strYoutube}>{data.strYoutube}</a>
          <iframe
            title={data.strMeal}
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src={"https://www.youtube.com/embed?v=1ahpSTf_Pvk"}
          ></iframe>
          <img src={data.strMealThumb} alt={data.strMeal} />
          <p className="decscription">{data.strInstructions}</p>
          <p>{data.strTags}</p>
          <ul>
            <li>{data.strIngredient1}</li>
            <li>{data.strIngredient2}</li>
            <li>{data.strIngredient3}</li>
            <li>{data.strIngredient4}</li>
          </ul>
          <ul>
            <li>{data.strMeasure1}</li>
            <li>{data.strMeasure2}</li>
            <li>{data.strMeasure3}</li>
            <li>{data.strMeasure4}</li>
          </ul>
          <div>
            <i>{data.strSource}</i>
          </div>
        </>
      ) : (
        <span>Loading</span>
      )}
    </div>
  );
}

export default Details;
