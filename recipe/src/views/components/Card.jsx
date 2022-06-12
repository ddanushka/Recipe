function Card(props) {
  return (
    <div className="card">
      <h3 className="card__title">{props.title}</h3>
      <img src={props.imageUrl} alt={props.title} />
    </div>
  );
}

export default Card;
