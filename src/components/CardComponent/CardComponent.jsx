import "./CardComponent.scss";

const CardComponent = (props) => {
  return (
    <div style={{ backgroundColor: props.color, color: props.textColor }} className="card-block">
      <img src={props.imageUrl} alt="images" className="card-block__img" />
      <div className="card-block__body">
        <h4 className="card-block__title">{props.skill}</h4>
      </div>
      <figure className="card-block__hover" style={{ backgroundColor: props.cardColor}}>
        <p className="card-block__legend">{props.legendText}</p>
      </figure>
    </div>
  );
};

export default CardComponent;
