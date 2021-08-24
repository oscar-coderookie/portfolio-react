import { useEffect, useState } from "react";
import { getNodejsProjects } from "../../db/nodejs";
import "./ReactDetail.scss";

const ReactDetail = (id) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (id) {
      getNodejsProjects(id).then((projects) => {
        setData(projects);
      });
    }
  }, [id]);
  console.log(data);

  return <div className="react-detail">
    {data.map((project)=> (
      <div>
        <h1>{project.id}</h1>
      </div>
    ))}
  </div>;
};

export default ReactDetail;
