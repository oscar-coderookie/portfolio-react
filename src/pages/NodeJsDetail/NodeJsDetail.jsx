import "./NodeJsDetail.scss";
import { useEffect, useState } from "react";
import { getNodejsById } from "../../db/nodejs";
import { useParams } from "react-router";
import { Carousel } from "react-bootstrap";

const NodeJsDetail = () => {
  const [nodeDetails, setNodeDetails] = useState({});
  const [gallery, setGallery] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getNodejsById(id).then((nodeProjects) => {
      setNodeDetails(nodeProjects);
      setGallery(nodeProjects.images);
    });
  }, []);

  return (
    <div className="nodejs-detail">
      <div className="container-xl">
        <Carousel>
          {gallery.map((img) => {
            return (
              <Carousel.Item>
                <img className="mx-auto" src={img} alt={img} style={{ height: "100%", width: "100%" }} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default NodeJsDetail;
