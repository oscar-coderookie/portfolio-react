import { useEffect, useState } from "react";
import WebCard from "../../components/WebCard/WebCard";
import { getNodejsProjects } from "../../db/nodejs";
import "./NodeJs.scss";

const NodeJs = (id) => {
  const [nodeProjects, setNodeProjects] = useState([]);

  useEffect(() => {
    if (id) {
      getNodejsProjects(id).then((projects) => {
        setNodeProjects(projects);
      });
    }
  }, [id]);
  

  return (
    <div className="node">
      {nodeProjects.map((node) => {
        return (
          
            <WebCard
              backgroundColor="#edf0f2"
              hrefGallery={`/work/nodejs/${node.id}`}
              thumbnail={node.thumb}
              title={node.title}
              deployUrl={node.deploy}
              repositorie={node.repository}
              key={node.id}
            />
        );
      })}
    </div>
  );
};

export default NodeJs;
