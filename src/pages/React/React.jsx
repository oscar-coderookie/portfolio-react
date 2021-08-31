import { useState, useEffect } from "react";
import WebCard from "../../components/WebCard/WebCard";
import { getReactProjects } from "../../db/reactjs";
import "./React.scss";

const React = () => {
  const [allReact, setAllReact] = useState([]);

  useEffect(() => {
    getReactProjects().then((react) => {
      setAllReact(react);
    });
  }, []);
  return (
    <div className="react">
      <div className="react-block">
        <div className="container-xl">
          <div className="row">
            {allReact.map((react) => {
              return (
                <div className="col-11 col-md-6 mx-auto" key={react.id} >
                  <WebCard
                    hrefGallery={`/work/react/${react.id}`}
                    backgroundColor="#edf0f2"
                    thumbnail={react.thumb}
                    title={react.title}
                    deployUrl={react.deploy}
                    repositorie={react.repository}
                    
                    icon={react.icon}
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

export default React;
