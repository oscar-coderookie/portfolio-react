import { useEffect, useState } from "react";
import WebCard from "../../components/WebCard/WebCard";
import firebase from "../../config/firebase";
import "./NodeJs.scss";

const db = firebase.firestore();
const NODE_COLLECTION = "nodejs";

const NodeJs = () => {
  const [nodeProjects, setNodeProjects] = useState([]);

  useEffect(() => {
    db.collection(NODE_COLLECTION).onSnapshot((snapshot) => {
      setNodeProjects(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  console.log(nodeProjects)
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
