import "./NodeJsDetail.scss";
import { useEffect, useState } from "react";
import GalleryLines from './../../components/GalleryLines/GalleryLines';
import { getNodejsById } from "../../db/nodejs";
import { useParams } from "react-router";

const NodeJsDetail = () => {
  const [nodeDetails, setNodeDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    getNodejsById(id).then((nodeProjects) => {
      setNodeDetails(nodeProjects);
    });
  }, []);
  console.log(nodeDetails);

  const gallery = nodeDetails.images;

  return (
    <div className="nodejs-detail">
      <h1>{nodeDetails.id}</h1>
      <h2>{nodeDetails.title}</h2>
      <h3>{nodeDetails.thumb}</h3>
      <GalleryLines/>
    </div>
  );
};

export default NodeJsDetail;
