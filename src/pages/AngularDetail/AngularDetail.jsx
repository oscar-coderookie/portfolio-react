import { useEffect, useState } from "react";
import "./AngularDetail.scss";
import { getAngularById } from "../../db/angular";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const AngularDetail = () => {
  // eslint-disable-next-line
  const [angularDetail, setAngularDetail] = useState({});
  const [gallery, setGallery] = useState([]);
  const { id } = useParams();
    console.log('ehh')
  useEffect(() => {
    getAngularById(id).then((detail) => {
      setAngularDetail(detail);
      setGallery(detail.images);
    });
  }, [id]);
  console.log(gallery);

  return (
    <div className="angular-detail">
      <div className="container-xl">
        <Carousel>
          {gallery.map((img) => {
            return (
              <Carousel.Item key={img}>
                <img className="mx-auto" src={img} alt={img} style={{ height: "100%", width: "100%" }} key={img}/>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default AngularDetail;
