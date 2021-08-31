import { useEffect, useState } from "react";
import WebCard from "../../components/WebCard/WebCard";
import { getNodejsProjects } from "../../db/nodejs";
import "./NodeJs.scss";

const NodeJs = () => {
  const [nodeProjects, setNodeProjects] = useState([]);

  useEffect(() => {
    getNodejsProjects().then((projects) => {
      setNodeProjects(projects);
    });
  }, []);

  return (
    <div className="node">
      <div className="node-block">
        <div className="container-xl">
          <div className="row">
            {nodeProjects.map((node) => {
              return (
                <div className="col-11 col-md-6 mx-auto" key={node.id}>
                  <WebCard
                    backgroundColor="#edf0f2"
                    hrefGallery={`/work/nodejs/${node.id}`}
                    thumbnail={node.thumb}
                    title={node.title}
                    deployUrl={node.deploy}
                    repositorie={node.repository}
                    
                    icon={node.icon}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodeJs;
