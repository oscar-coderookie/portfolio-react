import Card from "react-bootstrap/Card";
import './CardComponent.scss';

const CardComponent = (props) => {
  return (
    <Card style={{backgroundColor: props.color}} className="card-block">
      <Card.Img variant="top" src={props.imageUrl} className="card-block__img"/>
      <Card.Body className="card-block__body">
        <Card.Title className="card-block__title">{props.skill}</Card.Title>
        <Card.Text className="card-block__text">
          {props.legendText}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
