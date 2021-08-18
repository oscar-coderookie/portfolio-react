import "./Portfolio.scss";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const technologicStack = [
  {
    id: 1,
    title: "React Js",
    imageUrl: "https://img.icons8.com/color/240/000000/react-native.png",
    backgroundColor: "#EFEFEF",
    legend: "Projects developed in React JS",
  },
  {
    id: 2,
    title: "NodeJs",
    imageUrl: "https://img.icons8.com/color/144/000000/nodejs.png",
    backgroundColor: "#787878",
    legend: "Projects developed in Nodejs",
  },
  {
    id: 3,
    title: "Angular",
    imageUrl: "https://img.icons8.com/color/144/000000/angularjs.png",
    backgroundColor: "#EFEFEF",
    legend: "Projects developed in Angular",
  },
  {
    id: 4,
    title: "HTML & CSS",
    imageUrl: "https://img.icons8.com/color/144/000000/html-5--v1.png",
    backgroundColor: "#787878",
    legend: "Projects developed in HTML",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Container>
        <Row>
          {technologicStack.map((stack) => {
            return (
              <Col>
                <NavLink className="header__link" exact to="/work/:id">
                  <CardComponent
                    color={stack.backgroundColor}
                    imageUrl={stack.imageUrl}
                    skill={stack.title}
                    legendText={stack.legend}
                    key={JSON.stringify(stack.id)}
                  />
                </NavLink>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
