import { useState, useEffect } from "react";
import { getRecipe } from "../../data/getData";
import { useParams, useNavigate } from "react-router-dom";
import Status from "../components/Status";

function Details() {
  let params = useParams();
  let navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const [youtube, setYoutube] = useState([]);
  const [status, setStatus] = useState();

  useEffect(() => {
    getRecipe(params.id)
      .then((data) => {
        setDetails(data.meals[0]);
        console.log(data)
        setYoutube(getYoutubeID(details.strYoutube));
      })
      .catch((err) => setStatus(err.message));
  }, [details.strYoutube, params.id]);

  // get youtube video ID from the url
  const getYoutubeID = (link) => {
    if (link) {
      let youtubeId = link.split("v=")[1];
      const ampersandPosition = youtubeId.indexOf("&");
      if (ampersandPosition !== -1) {
        youtubeId = youtubeId.substring(0, ampersandPosition);
      }
      return youtubeId;
    }
  };

  return (
    <div className="recipe-details">
      {details.strMeal ? (
        <>
          <h1 className="bold">
            <button onClick={() => navigate(-1)}>Back |</button>{" "}
            {details.strMeal}
          </h1>
          <div className="detail-grid">
            <div className="media">
              <img src={details.strMealThumb} alt={details.strMeal} />
              <iframe
                title={details.strMeal}
                id="ytplayer"
                type="text/html"
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${youtube}`}
              ></iframe>
            </div>
              <div className="decscription"><h2>Instructions</h2>{details.strInstructions}</div>
              <div className="ind-list">
                <h2>Ingredients</h2>
                <ul>
                  <li>{details.strIngredient1} : {details.strMeasure1}</li>
                  <li>{details.strIngredient2} : {details.strMeasure2}</li>
                  <li>{details.strIngredient3} : {details.strMeasure3}</li>
                  <li>{details.strIngredient4} : {details.strMeasure4}</li>
                </ul>
              </div>
              <i><a href={details.strSource}>{details.strSource}</a></i>
          </div>
        </>
      ) : (
        <Status data={details} error={status} />
      )}
    </div>
  );
}

export default Details;
