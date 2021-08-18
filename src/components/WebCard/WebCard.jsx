import "./WebCard.scss";

const WebCard = (props) => {
  return (
    <div className="webcard">
      <div className="webcard__info">
        <h2 className="webcard__title">{props.title}</h2>
        <p className="webcard__text">{props.description}</p>
      </div>
      <div className="webcard__img-container">
        <img src={props.thumbnail} className="webcard__thumb" alt={props.title} />
      </div>
      <div className="webcard__links-container">
        <a className="webcard__links" href={props.deployUrl} target="_blank" rel="noreferrer">
          Web deploy: {props.deployUrl}
        </a>
        <a className="webcard__links" href={props.repositorie} target="_blank" rel="noreferrer">
          Repository: {props.repositorie}
        </a>
      </div>
    </div>
  );
};

export default WebCard;
