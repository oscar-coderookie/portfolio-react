import { useEffect, useState } from "react";
import "./ReactDetail.scss";
import {getReactById} from './../../db/reactjs';
import { useParams } from "react-router";
import { Carousel } from "react-bootstrap";

const ReactDetail = () => {

  const [reactImages, setReactImages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getReactById(id).then((reactProjects) => {
      setReactImages(reactProjects.images);
    })
  }, [id]);

  return (
  <div className="react-detail">
    <div className="container-xl">
    <Carousel>
          {reactImages.map((img) => {
            return (
              <Carousel.Item key={img}>
                <img className="mx-auto" src={img} alt={img} style={{ height: "100%", width: "100%" }} />
              </Carousel.Item>
            );
          })}
        </Carousel>
    </div>
  </div>
  )
};

export default ReactDetail;
