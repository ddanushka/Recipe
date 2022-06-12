function Card(props) {
  return (
    <div className="card">
      <div className="card__content">
        <h3 className="card__title">{props.title}</h3>
        <img src={props.imageUrl} alt={props.title} />
      </div>
    </div>
  );
}

export default Card;
