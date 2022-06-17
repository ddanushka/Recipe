import { NavLink } from "react-router-dom";
import placeholder from "../../assets/images/placeholder.png"

function Card(props) {
  return (
    <div className="card">
      <NavLink to={`${props.link}`}>
        <h3 className="card__title">{props.title}</h3>
        <img src={props.imageUrl ? props.imageUrl : placeholder} alt={props.title} />
      </NavLink>
    </div>
  );
}

export default Card;
